#!/usr/bin/env python3
"""
Sample input csv can be downloaded from:
See https://docs.google.com/spreadsheets/d/1N2TX5G59T9z6tlyIEbXTSZCaHk09DXstBK6leT2r4Mk/edit

CSV format description:
- 0 id
- 1 text
- 2 role
- 3 type
- 4 left_text
- 5 left_sequel
- 6 left_keywords
- 7 right_text
- 8 right_sequel
- 9 right_keywords

Output rendering with: https://mermaid.live/
"""
import csv

def build(s, r):
    return f"<strong>{r}</strong>: {s}"

def clean(s, n=80):
    """
    >>> clean("Once upon a time there was an old king who was so ill...<ins>Swipe card to make a choice...</ins>")
    'Once upon a time there was an old king who was\\nso ill...<ins>Swipe card to make a choice...</ins>'
    
    >>> clean("Could I do something?")
    'Could I do something?'
    """
    # print(s)
    words = s.split(" ")
    lines = []
    line = ""
    for w in words:
        if not line:
            line = w
        elif len(line) + len(w) < n:
            line += f" {w}"
        else:
            lines += [line]
            line = w
    lines += [line]
    result = "\\n".join(lines)
    return result.replace('"',"'")

result = []
with open('story.csv') as csvfile:
    spamreader = csv.reader(csvfile)
    title = True
    scene = False
    present = []
    for row in spamreader:
        if title:
            title = False
            result += ["```mermaid", "flowchart TD"]
            continue
        if not row[0] or not row[0].strip():
            if scene:
                result += ["\tend"]
                scene = False
            if row[1] and row[1][0] == "#":
                name = row[1].replace('#',"").strip().replace(' ', '_')
                result += [f"\tsubgraph {name}"]
                scene = True
            continue
        ind = "\t" * (1 + int(scene))
        nlbl = ""
        if int(row[0]) not in present:
            full = clean(build(row[1], row[2]))
            nlbl = f'["{full}"]'
            present += [int(row[0])]
        llbl = f'|"{clean(row[4])}"|' if row[4].strip() else ""
        rlbl = f'|"{clean(row[7])}"|' if row[7].strip() else ""
        # print(f'\t{row[0]}["{row[1]}"] -->|"{row[4]}"| {row[5]}')
        result += [f'{ind}{row[0]}{nlbl} -->{llbl} {row[5]}',
        f'{ind}{row[0]} -->{rlbl} {row[8]}']
if scene:
    result += ["\tend"]
    scene = False
result += ["```"]
with open('story.md', 'w') as mdfile:
    mdfile.writelines(result)
