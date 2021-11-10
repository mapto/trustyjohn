// TODO will handle menus and credits here


function startup() {
    // TODO allow starting from a different story point for easier development
    // Can be done by adding a text box in the page. In later versions it will be hidden if not in development mode
    load_card(events['0'])
}

window.onload = startup
