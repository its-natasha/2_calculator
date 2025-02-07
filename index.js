
let sumEl = document.getElementById("sum-el")
let num1 = document.getElementById("num1-el") 
let num2 = document.getElementById("num2-el") 
let subEl = document.getElementById("sub-el")
let divEl = document.getElementById("div-el")
let multiEl = document.getElementById("multi-el")


// Create four functions: add(), subtract(), divide(), multiply()

function getNumbers() {
    return {
        num1: parseInt(num1.value),
        num2: parseInt(num2.value)
    }
}

function add() {
    let {num1, num2} = getNumbers()
    sumEl.textContent = num1 + num2
}

function subtract(){
    let {num1, num2} = getNumbers()
    sumEl.textContent = num1 - num2
}

function divide() {
    let {num1, num2} = getNumbers()
    sumEl.textContent = num1/num2
}

function multiply(){
    let {num1, num2} = getNumbers()
    sumEl.textContent = num1 * num2
}

function reset() {
    sumEl.textContent = 0
    num1.value = ""
    num2.value = ""
   
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



