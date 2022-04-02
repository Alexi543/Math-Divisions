import { DIGITS } from "./vars.js";

const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");

const clearInputToNumber = (input) => {
    input = input.toString();

    if (input === "" || input === undefined || input === []) return 0;

    input = input.toString().split("");
    input = input.filter(x => DIGITS.indexOf(x) !== -1);

    if (input === []) return 0;

    let cleanInput = "";

    input.forEach(num => cleanInput += num);
    cleanInput = parseInt(cleanInput);
    
    return cleanInput;
}

const foundDividers = (number) => {
    let dividers = [];
    for (let i = 0; i <= number; i++) if (Math.floor(number / i) * i === number)  dividers.push(i);
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
        if (button.id === "start-dividers") DIVIDERS_OUTPUT.textContent = foundDividers(clearInputToNumber(DIVIDERS_NUMBER.value));
    })
})
