// TODO will handle menus and credits here

function switch_sound() {
    var sound = document.querySelector("audio")
    var btn = document.querySelector("#sound_switch")
    if (sound.muted || sound.paused) {
        sound.muted = false
        sound.play()
    } else {
        sound.muted = true
        sound.pause()
    }
    // Button indicates future state upon click
    if (sound.muted || sound.paused) {
        btn.src = "img/btn/sound.png"
    } else {
        btn.src = "img/btn/mute.png"
    }
}

function init_sound() {
    var btn = document.querySelector("#sound_switch")
    btn.onclick = switch_sound
}

function init_game() {
    // TODO sound needs to be proposed in menu and enabled if chosen by player
    init_sound()

    document.querySelector("audio").muted = 
    console.log("Init")
    load_story()
}

window.onload = init_game
