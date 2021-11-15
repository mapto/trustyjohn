var swipe = {"on": false}
var default_transform = "translate(-50%, 50%)"

/**
 * dummy function to disable event handling
 * @returns false
 */
function do_nothing() {
    return false
}

/**
 * from https://css-tricks.com/simple-swipe-with-vanilla-javascript/
 * @param {*} e event
 * @returns object that has coordinates
 */
function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e
}

function rotate(elt, deg) {
    // also defined in game.css
    elt.style.transform = "rotate(" + deg + "deg) " + default_transform
}

function reset_swipe() {
    var sound = document.querySelector("#card_flip")
    sound.pause()

    var card = document.querySelector("#current_swipe")
    rotate(card, 0)
    card.querySelectorAll(".action").forEach(
        (elt) => {elt.style.display = "none"}
    );
    swipe = {"on": false}
}

function swipe_show(rot) {
    var card = document.querySelector("#current_swipe")
    rotate(card, rot)
    
    if (rot < 0) {
        card.querySelector(".left.action").style.display = "inherit"
        card.querySelector(".right.action").style.display = "none"
    } else {
        card.querySelector(".right.action").style.display = "inherit"
        card.querySelector(".left.action").style.display = "none"
    }
}

function swipe_out(side) {
    load_card(document.querySelector("#" + side).value)
    reset_swipe()
    // TODO score
}

function start_swipe(e) {
    var sound = document.querySelector("#card_flip")
    sound.play()

    // API reference:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    // working with global coordinates, because we move the target element
    swipe = {
        "on": true,
        "x": unify(e).clientX
    }
}

function interpret_swipe(e) {
    if (!swipe.on) {
        // if we are not in the middle of a swipe, mouse/touch movement is irrelevant
        return;
    }

    // TODO slicker swipe: make sure that the card below moves exactly with your finger
    // working with global coordinates, because we move the target element
    if (!swipe.x) {
        swipe.x = unify(e).clientX;
    }
    var dir = unify(e).clientX - swipe.x;
    // console.log(dir)
    if (dir < -10) {
        // TODO: swipe out condition depends on leaving page, not length of swipe
        if (dir < -500) {
            swipe_out("left");
        } else {
            swipe_show(dir / 15);
        }
    } else if (dir > 10) {
        // TODO: swipe out condition depends on leaving page, not length of swipe
        if (dir > 500) {
            swipe_out("right");
        } else {
            swipe_show(dir / 15);
        }
    }
}

// TODO handle swipe better, like in https://css-tricks.com/simple-swipe-with-vanilla-javascript/
var card = document.querySelector("#current_swipe .card");
card.ontouchstart = start_swipe;
card.onmousedown = start_swipe;

card.ontouchmove = interpret_swipe;
card.onmousemove = interpret_swipe;

var page = document.querySelector("#page");

// problematic case is when mousedown is on card, but mouseup is out of it
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture
window.ontouchend = reset_swipe;
window.ontouchcancel = reset_swipe;
window.onmouseup = reset_swipe;
window.onclick = reset_swipe;
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
window.ondragstart = do_nothing;
window.ondrop = do_nothing;

