const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") {
            let dividersList = [];
            let number = Number(DIVIDERS_NUMBER.value);

            for (let i = 1; i <= number; i++) {
                if (Math.floor(number / i) * i == number) {
                    dividersList.push(i);
                }
            }

            dividersList = dividersList.filter()

            console.log(dividersList);
            DIVIDERS_OUTPUT.innerHTML = dividersList;
        }
    })
})