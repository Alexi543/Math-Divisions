const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");

const clearInputToNumber = (input) => {
    input = input.split("");
    if (input === undefined || input === NaN) return 0;
    input = input.filter(x => digits.indexOf(x) !== -1);
    if (input.length === 0) return 0;
    input = String(input);
}

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") {
            let dividersList = [];
            let number = clearInputToNumber(DIVIDERS_NUMBER.value);

            for (let i = 1; i <= number; i++) {
                if (Math.floor(number / i) * i == number) {
                    dividersList.push(i);
                }
            }

            // dividersList = String(dividersList).split("").filter(x => delList.indexOf(x) !== -1).toString;

            console.log(dividersList);
            DIVIDERS_OUTPUT.innerHTML = dividersList;
        }
    })
})

//pouvoir mettre un nombre ilimite de nombre pour les facteures commun