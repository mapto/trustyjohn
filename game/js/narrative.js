// TODO will handle content here

// TODO extract and load dynamically from a CSV extracted from https://docs.google.com/spreadsheets/d/1N2TX5G59T9z6tlyIEbXTSZCaHk09DXstBK6leT2r4Mk
// first row in file is headings (dictionary keys), rows that start with # are separators for easier readibility by writers
events = [{
        // text uses single quotes because it could probably contain more double quotes, so less need to escape chars
        "text": '<p>Once upon a time there was an old king who was so ill that he thought to himself,"I am lying on what must be my death-bed." Then said he, "Tell Faithful John to come to me." Faithful John are you, and are so called, because you have been so loyal to him for your whole life long.</p><p class="instructions">Swipe card left or right to continue...</p>',
        "image": "oldking",
        "type": "kernel", // actually onboarding
        "left_action": "Okay",
        "right_action": "Got it",
    },
    {
        // text uses single quotes because it could probably contain more double quotes, so less need to escape chars
        "text": '<p>"Most faithful John, I feel my end approaching, and have no anxiety except about my son. He is still of tender age, and cannot always know how to guide himself. If thou dost not promise me to teach him everything that he ought to know, and to be his foster-father, I cannot close my eyes in peace."</p><p class="instructions">Swipe your response...</p>',
        "image": "oldking",
        "type": "kernel", // actually onboarding
        "left_action": "Okay",
        "rigth_action": "Got it",
    },
]

