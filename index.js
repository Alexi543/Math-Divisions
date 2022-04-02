import { string } from "./JavaScript-Tools/string.js";

const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");
const COMMUN_OUTPUT = document.getElementById("output-commun-dividers");
const COMMUN_NUMBER_1 = document.getElementById("commun-dividers-num-1");
const CONNUM_NUMBER_2 = document.getElementById("commun-dividers-num-1");

const clearInputToNumber = (input) => string.keepCharacters(input, string.digits);

const foundDividers = (number) => {
    let dividers = [];

    for (let i = 1; i <= number; i++) if (Math.floor(number / i) * i == number) dividers.push(i);

    return dividers;
}

const foundSameDividers = (divider1, divider2) => {
    let dividersList1 = foundDividers(divider1);
    let dividersList2 = foundDividers(divider2);
    let sameDividers = dividersList1.filter(x => dividersList2.indexOf(x) !== -1);

    return sameDividers;
}

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") {
            let out;

            if (DIVIDERS_NUMBER.value.toString().split("").length > 0) {
                out = foundDividers(clearInputToNumber(DIVIDERS_NUMBER.value));
                out = out.toString();
            } else out = "Number Error";

            DIVIDERS_OUTPUT.textContent = out;
        } else if (button.id === "start-commun-dividers") {
            let number1 = clearInputToNumber(COMMUN_NUMBER_1.value);
            let number2 = clearInputToNumber(COMMUN_NUMBER_2.value);
            let out;
            
            

        }
    })
})
