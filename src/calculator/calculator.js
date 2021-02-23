import { body, h1, keys, outputResultText, root } from "../constant/constant"
import calculatePressBtn from "../control/calculatePressBtn"
import calculateTypeKey from "../control/calculateTypeKey"
import checkInputValue from "../control/checkInputValue"

class Calculator {
    renderPage() {
        // crete input
        outputResultText.setAttribute("autofocus", "on")
        outputResultText.setAttribute("placeholder", "0")
        outputResultText.setAttribute("type", "text")
        outputResultText.classList.add("input")
        root.appendChild(outputResultText)
        //create text at top of body
        h1.innerText = `Calculator Project `
        body.appendChild(h1)
        body.insertBefore(h1, body.childNodes[0])

        // load all buttons and operators
        for (let i = 0; i < keys.length; i++) {
            let div = document.createElement("div")
            div.classList.add("row")

            for (let y = 0; y < keys[i].length; y++) {
                let btn = document.createElement("div")
                btn.innerText = keys[i][y]
                btn.classList.add("btn")
                btn.addEventListener("click", calculatePressBtn)

                outputResultText.addEventListener("keyup", calculateTypeKey)
                outputResultText.addEventListener("keypress", checkInputValue)
                div.appendChild(btn)
            }
            root.appendChild(div)

            // width 100% for equal and CE
            let equal = document.getElementsByClassName("btn")

            for (let el of equal) {
                if (el.innerText === "=") {
                    el.style.width = "93%"
                }
            }
        }
    }
}

export default Calculator
