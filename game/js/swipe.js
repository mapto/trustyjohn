var swipe = {"on": false}


/**
 * dummy function to disable event handling
 * @returns false
 */
function do_nothing() {
    return false;
}

function reset_swipe() {
    var card = document.querySelector("#currentswipe")
    card.style.transform = "rotate(0deg)"
    card.querySelector(".action").style.display = "none"
    swipe.on = {"on": false}
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

function left_swipe_out() {
    // TODO drop current card, update score load new card
}

function right_swipe_out() {
    // TODO drop current card, update score load new card
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
        // if we are not in the middle of a swipe, mouse movement is irrelevant
        return
    }

    // TODO slicker swipe
    // working with global coordinates, because we move the target element
    var dir = e.x - swipe.x
    // console.log(dir)
    if (dir < -10) {
        right_swipe_show(dir / 15)
    } else if (dir > 10) {
        left_swipe_show(dir / 15)
    }
}

var card = document.querySelector("#currentswipe .card")
card.onmousedown = start_swipe
card.onmousemove = interpret_swipe

// problematic case is when mousedown is on card, but mouseup is out of it
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture
window.onmouseup = reset_swipe
window.onmouseclick = reset_swipe
// window.onmouseclick = do_nothing

// disable default browser dragging
window.ondragstart = do_nothing
window.ondrop = do_nothing

