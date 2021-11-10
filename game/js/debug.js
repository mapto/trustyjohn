if (document.location.href.endsWith("debug")) {
    document.querySelectorAll("#debug input").forEach((elt) => {
        elt.onchange = init_game
    })

    document.querySelector("#debug").style.display = "inherit"
    document.querySelector('#story').value = "https://docs.google.com/spreadsheets/d/1N2TX5G59T9z6tlyIEbXTSZCaHk09DXstBK6leT2r4Mk/gviz/tq?tqx=out:csv&sheet=Sheet1"
}

