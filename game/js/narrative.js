var narrators = ["narrator", "badend", "goodend"]

// This is fallback content if story.csv cannot be loaded. This would be the case when running locally
// Notice that event ids/keys are strings, not numbers
var events = {
    '0': {
        "text": "This is a dummy placeholder for when the CSV cannot be loaded. Try loading the <a href='http://gamej.am'>official version</a>.",
        "image": "badend",
        "left": {
            "text": "see how to run a local web server",
            "id": '0',
            "values": ""
        },
        "right": {
            "text": "nothing to do",
            "id": '0',
            "values": ""
        }
    }
}

function load_story() {
    console.log("Load story")
    var story = document.querySelector("#story").value
    console.log(story)
    Papa.parse(story, {
        download: true,
        complete: (results) => {
            events = {}
            // console.log(results)
            let header = true
            for (let row of results.data) {
                // ignore csv header
                if (header) {
                    header = false
                    continue
                }
                // ignore section titles
                if (row[1][0] === "#") {
                    continue
                }
                // TODO add logic that handles left or right, based on different types:
                // end event leads to 0, satellite event doesn't affect subsequent states
                events[row[0]] = {
                    "text": row[1],
                    "image": row[2], // derived from role
                    "type": row[3],
                    "left" : {
                        "text": row[4],
                        "id": row[5],
                        "values": row[6]
                    },
                    "right": {
                        "text": row[7],
                        "id": row[8],
                        "values": row[9]
                    }
                }
            }
            // console.log(events)
            // After the story is downloaded, card is overwritten
            // TODO: Add nice placeholder to show before that, maybe loader
            var current = document.querySelector("#current").value
            load_card(current)                }
    })    
}

/**
 * @param {*} card_id
 */
 function load_card(card_id) {
    // TODO Add the possibility that a satellite event appears before the next kernel (story advancing) event
    console.log("Load card")
    // console.log(events)    
    var card = events[card_id]
    // console.log(card)

    if (card.text.length > 250) {
        document.querySelector("#narrative").style.fontSize = "inherit"    
    } else if (card.text.length > 150) {
        document.querySelector("#narrative").style.fontSize = "large"    
    } else {
        document.querySelector("#narrative").style.fontSize = "x-large"    
    }
    if (!narrators.includes(card.image)) {
        card.text = "<quote>" + card.text + "</quote>"
    }
    document.querySelector("#narrative").innerHTML = "<p>" + card.text + "</p>"
    document.querySelector("#current_swipe .card img").src = "img/card/" + card.image + ".png"
    // TODO end and satellite events won't have sequel cards defined
    // Instead end card would always restart the game and satellite card would keep the sequel unchanged
    document.querySelector("#current_swipe .card .action.left").innerText = card.left.text
    document.querySelector("#current_swipe .card .action.right").innerText = card.right.text
    document.querySelector("#left_card").value = card.left.id
    document.querySelector("#right_card").value = card.right.id
    document.querySelector("#left_keywords").value = card.left.values
    document.querySelector("#right_keywords").value = card.right.values

    if (document.location.href.endsWith("debug")) {
        if (card.left.values)
            document.querySelector("#current_swipe .card .action.left").innerText += " [" + card.left.values + "]"
        if (card.right.values)
            document.querySelector("#current_swipe .card .action.right").innerText += " [" + card.right.values + "]"
        document.querySelector("#current").value = card_id
    }
}
