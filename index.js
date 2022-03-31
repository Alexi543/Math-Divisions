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
    console.log(number);
}

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") foundDividers(clearInputToNumber(DIVIDERS_OUTPUT.value));
    })
})

//pouvoir mettre un nombre ilimite de nombre pour les facteures commun