const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");

const clearInputToNumber = (input) => {
    input = String(input);

    if (input === "" || input === undefined || input === []) return 0;

    console.log(1);

    input = String(input).split("");
    input = input.filter(x => DIGITS.indexOf(x) !== -1);

    if (input === []) return 0;

    input = String(input);
    input = input.filter(x => [","].indexOf(x) === -1);

    // console.log(`${input} --- ${input.split(",").length-1}`); //debug

    // for (let i = 0; i < input.split(",").length - 1; i++) {
    //     input = input.replace(",", "");
    // }
    
    return input;
}

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") {
            let dividersList = [];
            let number = clearInputToNumber(DIVIDERS_NUMBER.value);

            for (let i = 1; i <= number; i++) {
                if (Math.floor(number / i) * i === number) dividersList.push(i);
            }

            // dividersList = String(dividersList).split("").filter(x => delList.indexOf(x) !== -1).toString;

            console.log(dividersList);
            DIVIDERS_OUTPUT.innerHTML = dividersList;
        }
    })
})

//pouvoir mettre un nombre ilimite de nombre pour les facteures commun