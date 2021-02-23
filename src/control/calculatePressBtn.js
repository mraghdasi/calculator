import {operators,outputResultText} from "../constant/constant";

function calculatePressBtn() {
    let currentValue = this.innerText
    let outputResultValue = outputResultText.value

    // press equal button to see result
    if (currentValue === '=') {
        outputResultValue = eval(outputResultValue)
    } else {
        // crate last string so if operators then we can change last operators
        let lastStr = outputResultValue.substring(outputResultValue.length - 1)

        if (operators.includes(currentValue)) {
            //can change operator
            if (operators.includes(lastStr)) {
                outputResultValue = outputResultValue.substring(0, outputResultValue.length - 1)
            } else {
                outputResultValue = eval(outputResultValue)
            }
        }
        outputResultValue += currentValue;
    }
    // press C button
    if (currentValue === 'C') {
        outputResultValue = ''
        // press CE button
    } else if (currentValue === 'CE') {
        outputResultValue = outputResultValue.substring(0, outputResultValue.length - 3)
    }

    outputResultText.value = outputResultValue
}

export default calculatePressBtn