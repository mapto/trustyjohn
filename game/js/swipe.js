var swipe = {"on": false}


/**
 * dummy function to disable event handling
 * @returns false
 */
function do_nothing() {
    return false
}

function reset_swipe() {
    var card = document.querySelector("#currentswipe")
    card.style.transform = "rotate(0deg)"
    card.querySelectorAll(".action").forEach(
        (elt) => {elt.style.display = "none"}
    );
    swipe = {"on": false}
}

function left_swipe_show(rot) {
    var card = document.querySelector("#currentswipe")
    card.style.transform = "rotate(" + rot + "deg)"
    
    card.querySelector(".left.action").style.display = "inherit"
    card.querySelector(".right.action").style.display = "none"
}

function right_swipe_show(rot) {
    var card = document.querySelector("#currentswipe")
    card.style.transform = "rotate(" + rot + "deg)"

    card.querySelector(".right.action").style.display = "inherit"
    card.querySelector(".left.action").style.display = "none"
}

function swipe_out(side) {
    load_card(document.querySelector("#" + side).value)
    reset_swipe()
    // TODO score
}

function start_swipe(e) {
    // API reference:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    // working with global coordinates, because we move the target element
    swipe = {"on": true, "x": e.x, "y": e.y}
}

function interpret_swipe(e) {
    if (!swipe.on) {
        // if we are not in the middle of a swipe, mouse/touch movement is irrelevant
        return
    }

    // TODO slicker swipe: make sure that the card below moves exactly with your finger
    // working with global coordinates, because we move the target element
    if (!swipe.x) {
        swipe.x = e.x
    }
    var dir = e.x - swipe.x
    // console.log(dir)
    if (dir < -10) {
        // TODO: swipe out condition depends on leaving page, not length of swipe
        if (dir < -500) {
            swipe_out("left")
        } else {
            left_swipe_show(dir / 15)
        }
    } else if (dir > 10) {
        // TODO: swipe out condition depends on leaving page, not length of swipe
        if (dir > 500) {
            swipe_out("right")
        } else {
            right_swipe_show(dir / 15)
        }
    }
}

// TODO handle swipe better, like in https://css-tricks.com/simple-swipe-with-vanilla-javascript/
var card = document.querySelector("#currentswipe .card")
card.touchstart = start_swipe
card.touchmove = interpret_swipe
card.onmousedown = start_swipe
card.onmousemove = interpret_swipe

var page = document.querySelector("#page")

// problematic case is when mousedown is on card, but mouseup is out of it
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture
window.ontouchend = reset_swipe
window.ontouchcancel = reset_swipe
window.onmouseup = reset_swipe
window.onclick = reset_swipe
// window.onmouseleave = reset_swipe
// window.onmouseleave = reset_swipe
// window.onmouseclick = do_nothing

// page.ontouchend = reset_swipe
// page.ontouchcancel = reset_swipe
// page.onmouseup = reset_swipe
// page.onclick = reset_swipe
// page.onmouseleave = reset_swipe

// document.ondrag = do_nothing

// disable default browser dragging
window.ondragstart = do_nothing
window.ondrop = do_nothing

