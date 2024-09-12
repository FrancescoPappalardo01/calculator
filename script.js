// Select elements and assign them to variables
const display = document.querySelector(".display");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSeven = document.getElementById("seven");
const btnEight = document.getElementById("eight");
const btnNine = document.getElementById("nine");
const btnZero = document.getElementById("zero");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnTimes = document.getElementById("times");
const btnDivide = document.getElementById("divide");
const btnPercentage = document.getElementById("percentage");
const btnDel = document.getElementById("del");
const btnAc = document.getElementById("ac");
const btnComma = document.getElementById("comma");

/*   let operatorKeys = document.querySelectorAll('.operators');
  operatorKeys.forEach(operator => {
    operator.classList.remove('selected-operator');
  }); */

// Add event listeners to buttons
btnOne.addEventListener("click", () => display.value += "1");
btnTwo.addEventListener("click", () => display.value += "2");
btnThree.addEventListener("click", () => display.value += "3");
btnFour.addEventListener("click", () => display.value += "4");
btnFive.addEventListener("click", () => display.value += "5");
btnSix.addEventListener("click", () => display.value += "6");
btnSeven.addEventListener("click", () => display.value += "7");
btnEight.addEventListener("click", () => display.value += "8");
btnNine.addEventListener("click", () => display.value += "9");
btnZero.addEventListener("click", () => display.value += "0");
btnPlus.addEventListener("click", () => display.value += " + ");
btnMinus.addEventListener("click", () => display.value += " - ");
btnTimes.addEventListener("click", () => display.value += " * ");
btnDivide.addEventListener("click", () => display.value += " / ");
btnPercentage.addEventListener("click", () => display.value += " % ");
btnComma.addEventListener("click", () => display.value += ".");

btnAc.addEventListener("click", () => display.value = ""); // Clear display
btnDel.addEventListener("click", () => display.value = display.value.slice(0, -1)); // Delete last character

btnPercentage.addEventListener("click", () => {
    
    if (display.value) {
        
        display.value = eval(display.value) / 100;
    }
});


const btnEquals = document.getElementById("equals");
btnEquals.addEventListener ("click", function event () {
    try {
        // Evaluate the expression in the display
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }

});

 