// This is fallback content if story.csv cannot be loaded. This would be the case when running locally
var events = {
    '0': {
        "text": "This is a dummy placeholder because the CSV cannot be loaded without a server",
        "image": "badend",
        "left_text": "see how to run a local web server",
        "left_sequel": '0',
        "right_text": "nothing to do",
        "right_sequel": '0'
    }
}

Papa.parse("story.csv", {
	download: true,
	complete: (results) => {
        // console.log(results)
        let header = true
        for (let row of results.data) {
            if (header) {
                header = false
                continue
            }
            if (row[1][0] === "#") {
                continue
            }
            events[row[0]] = {
                "text": row[1],
                "image": row[2],
                "left_text": row[4],
                "left_sequel": row[5],
                "right_text": row[6],
                "right_sequel": row[7]
            }
        }
	}
})

var next_left = events['0'];
var next_right = events['0'];

/**
 * @param {*} card 
 */
 function load_card(card) {
    // console.log(card)
    document.querySelector("#narrative").innerHTML = card.text
    document.querySelector("#currentswipe .card img").src = "img/card/" + card.image + ".png"
    document.querySelector("#currentswipe .card .action.left").innerText = card.left_text
    document.querySelector("#currentswipe .card .action.right").innerText = card.right_text
    next_left = events[Number(card.left_sequel)]
    next_right = events[Number(card.right_sequel)]
}
