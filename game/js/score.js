var scores = [
    {
        "id": "innovation",
        "positive": ["innovation"],
        "negative": ["tradition"],
        "full_card": 85,
        "empty_card": 85
    },
    {
        "id": "collective",
        "positive": ["collective", "generosity"],
        "negative": ["individual", "greed"],
        "full_card": 85,
        "empty_card": 85
    },
    {
        "id": "donation",
        "positive": ["solidarity", "cooperation"],
        "negative": ["competition", "rivlary", "rivality"],
        "full_card": 85,
        "empty_card": 85
    },
    {
        "id": "destiny",
        "positive": ["destiny", "fate"],
        "negative": ["activism", "proactive"],
        "full_card": 85,
        "empty_card": 85
    },
]

function init_score() {
    scores.forEach(s => {
        let elt = document.querySelector("#" + s.id)
        elt.src = "img/balance/" + s.id + ".svg"
        elt.alt = s.positive[0] + " vs " + s.negative[0]
        elt.title = elt.alt
        console.log(elt.title)
        elt.style.opacity = 0.5
    })
}

function update_score(keywords) {
    // console.log(keywords)
    var tokens = keywords.split(/[, ;]+/)
    // console.log(tokens)
    for (var s of scores) {
        let indicator = document.querySelector('#' + s.id)
        let value = Number(indicator.style.opacity)
        for (var t of tokens) {
            if (s.positive.includes(t)) {
                value += 0.1
            } else if (s.negative.includes(t)) {
                value -= 0.1
            }
            indicator.style.opacity = value
            if (value >= 1) {
                load_card(s.full_card)
            } else if (value <= 0) {
                load_card(s.empty_card)
            }
            // console.log(s.id)
            // console.log(value)
        }    
    }
}