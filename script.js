let displayValue = 0;
let test = false;
let num1 = "";
let num2 = "";

//Operators
function add(num1, num2) {
    let result = parseInt(num1) + parseInt(num2);
    return result;
}
function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

let display = document.getElementById('display');
display.innerText = displayValue;

// Clicking multiple numbers allows input for multiple digits
let buttons = document.querySelectorAll('.number');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      displayValue = button.id;
      display.innerText = displayValue;
      if (test == false) {
        let numSelect = button.id;
        num1 += numSelect;
        console.log("num1 " + num1);
        display.innerText = num1;
      } else if (test == true) {
        let numSelect = button.id;
        num2 += numSelect;
        console.log("num2 " + num2);
        display.innerText = num2;
      } else {
        console.log('uhho')
      }
    });
  });
let operatorBtns = document.querySelectorAll('.operator');

//Deactivate other operator buttons when one is clicked
operatorBtns.forEach(function(item) {
  item.addEventListener("click", function() {
    operatorBtns.forEach(function(element) {
      element.classList.remove("active");
    });
  })
});

//operator buttons
let addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
  addBtn.classList.toggle('active');
  test = true;
})
let subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', () => {
  subtractBtn.classList.toggle('active');
  test = true;
})
let multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', () => {
  multiplyBtn.classList.toggle('active');
  test = true;
})
let divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', () => {
  divideBtn.classList.toggle('active');
  test = true;
});

let calculate = document.querySelector('#equals');
calculate.addEventListener('click', () => {
    if (addBtn.classList.contains('active')) {
      let answer = add(num1, num2);
      displayValue = answer;
      display.innerText = displayValue;
      num1 = answer;
    } else if (subtractBtn.classList.contains('active')) {
      let answer = subtract(num1, num2);
      displayValue = answer;
      display.innerText = displayValue;
      num1 = answer;
    } else if (multiplyBtn.classList.contains('active')) {
      let answer = multiply(num1, num2);
      displayValue = answer;
      display.innerText = displayValue;
      num1 = answer;
    } else if (divideBtn.classList.contains('active')) {
      let answer = divide(num1, num2);
      displayValue = answer;
      display.innerText = displayValue;
      num1 = answer;
    }
    num2 = '';
    test = true;
    addBtn.classList.remove('active');
});

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  displayValue = 0;
  display.innerText = 0;
  test = false;
  operatorBtns.forEach(function(element) {
    element.classList.remove("active");
  });
})