// This is fallback content if story.csv cannot be loaded. This would be the case when running locally
// Notice that event ids/keys are strings, not numbers
var events = {
    '0': {
        "text": "This is a dummy placeholder for when the CSV cannot be loaded. Try loading the <a href='http://gamej.am'>official version</a>.",
        "image": "badend",
        "left_text": "see how to run a local web server",
        "left_sequel_id": '0',
        "right_text": "nothing to do",
        "right_sequel_id": '0'
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
                events[row[0]] = {
                    "text": row[1],
                    "image": row[2],
                    "left_text": row[4],
                    "left_sequel_id": row[5],
                    "right_text": row[6],
                    "right_sequel_id": row[7]
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
 * @param {*} card 
 */
 function load_card(card_id) {
    // TODO Add the possibility that a satellite event appears before the next kernel (story advancing) event
    console.log("Load card")
    // console.log(events)    
    var card = events[card_id]
    // console.log(card)
    document.querySelector("#narrative").innerHTML = "<p>" + card.text + "</p>"
    document.querySelector("#currentswipe .card img").src = "img/card/" + card.image + ".png"
    // TODO end and satellite events won't have sequel cards defined
    // Instead end card would always restart the game and satellite card would keep the sequel unchanged
    document.querySelector("#currentswipe .card .action.left").innerText = card.left_text
    document.querySelector("#currentswipe .card .action.right").innerText = card.right_text
    document.querySelector("#left").value = card.left_sequel_id
    document.querySelector("#right").value = card.right_sequel_id

    if (document.location.href.endsWith("debug")) {
        document.querySelector("#current").value = card_id
    }
}
