import {outputResultText} from "../constant/constant";

function calculateTypeKey(e) {
    //check input value when keyup
    this.value = this.value.replace(/[^\d\/*\-+.()]/,'')

    let keycodes = e.keyCode
    let outputResultValue = outputResultText.value

    switch (keycodes) {
        // press enter to see result
        case 13 :
            outputResultValue = eval(outputResultValue)
            break
        // press Escape to delete value of input
        case 27 :
            outputResultValue = ''
            break
    }

    outputResultText.value = outputResultValue
}

export default calculateTypeKey