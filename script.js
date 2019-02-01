
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

const num1 = document.querySelector("#number1");
console.log(num1);
const num2 = document.querySelector("#number2");
console.log(num2);

const buttons = document.querySelectorAll("button");
console.log(buttons);

let result = 0;

for (let element of buttons) {
  element.addEventListener(`click`, handleClickButton);
  function handleClickButton() {
    let operation = element.id;
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        result = number1 / number2;
    }
    alert(`The result is ${result}`)
  }
}
