// TODO will handle menus and credits here

/**
 * 
 * @param {*} card 
 * @param {*} second_card optional, the other games do not show the next image, does it make sense that we show a non-kernel card? 
 */
function load_card(card, second_card) {
    document.querySelector("#narrative").innerHTML = card.text
    document.querySelector("#currentswipe .card img").src = "img/card/" + card.image + ".png"
    document.querySelector("#currentswipe .card .action.left").innerText = card.left_action
    document.querySelector("#currentswipe .card .action.right").innerText = card.right_action

    if (second_card) {
        document.querySelector("#card_behind img").src = "img/card/" + second_card.image + ".png"
    }
}

function startup() {
    load_card(events[0], events[1])
    console.log('TODO initialise')
}

window.onload = startup
