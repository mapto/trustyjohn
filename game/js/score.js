var scores = [
    {
        "id": "religion",
        "positive": ["tradition"],
        "negative": ["innovation"],
        "full_card": 85,
        "empty_card": 85
    },
    {
        "id": "people",
        "positive": ["collective", "generosity"],
        "negative": ["individual", "greed"],
        "full_card": 85,
        "empty_card": 85
    },
    {
        "id": "war",
        "positive": ["competition", "rivlary", "rivality"],
        "negative": ["solidarity", "cooperation"],
        "full_card": 85,
        "empty_card": 85
    },
    {
        "id": "money",
        "positive": ["destiny", "fate"],
        "negative": ["activism", "proactive"],
        "full_card": 85,
        "empty_card": 85
    },
]

function init_score() {
    document.querySelectorAll('#balance img').forEach(elt => {
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