const setBrightness = require("node-brightness");

const TEMP = {
    interval: 0
}

const selectMode = document.querySelector("select");

selectMode.addEventListener("change", (e) => {
    let mode = e.target.value;

    if (mode == "auto") {
        brightnessAuto()
    }
    else if (mode == "manual") {
        const range = document.querySelector('input')
        range.addEventListener('change', () => {
            setBts(range.value)
        })

        if(TEMP.interval){
            clearInterval(TEMP.interval)
            TEMP.interval = 0
        }
    }
    else {
        setBrightness(50, () => { })
        
        if(TEMP.interval){
            clearInterval(TEMP.interval)
            TEMP.interval = 0
        }
    }
});

function setBts(value) {
    setBrightness(value, () => { });
}

function brightnessAuto() {
    auto()
    TEMP.interval = setInterval(() => {
       auto()
    }, 60000);
}

function auto(){
    const date = new Date()
    let string = date.toLocaleTimeString()

    let btsLevel = 0


    if (string.length == 10) {
        string = `0${string}`
    }

    let hours = parseInt(string.slice(0, 2))
    let period = string.slice(9, 11)

    if (period == 'PM') {
        if (hours > 0 && hours <= 3)
            btsLevel = 80
        else if (hours > 3 && hours <= 6)
            btsLevel = 60
        else if (hours > 6 && hours <= 8)
            btsLevel = 40
        else if (hours > 9 && hours <= 12)
            btsLevel = 20
    }
    else {
        if (hours > 0 && hours <= 3)
            btsLevel = 20
        else if (hours > 3 && hours <= 6)
            btsLevel = 40
        else if (hours > 6 && hours <= 8)
            btsLevel = 60
        else if (hours > 9 && hours <= 12)
            btsLevel = 80
    }

    // setting brightness
    setBrightness(btsLevel, ()=>{})
}
