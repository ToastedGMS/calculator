// main 'operate' function (executes basic math)
let result = 0;
let num1 = 0;
let num2 = 0;
let operator = '';
function operate(num1, operator, num2) {
    console.log(num1, operator, num2)
    switch (operator){
     case '+':{
         result = num1+num2;
         return result;
         break;
     }
     case '-':{
          result = num1-num2;
          return result;
          break;
     }
     case '*':{
         result = num1*num2;
         return result;
         break;
     }
     case '/':{
         result = num1/num2;
         return result;
         break;
     }
 }
 }

//  functions that populate display when buttons are pressed 
const btns = document.querySelector('.btns');

let displayVal = '';
let numVal = '';

btns.addEventListener('click', function(e){
    if ((e.target).className === 'numBtn'){
        numVal += (e.target).textContent;
        displayVal += (e.target).textContent;
        const displayDiv = document.querySelector('.display');
        displayDiv.innerHTML = displayVal;
    } else if ((e.target).className === 'operator'){
        operator += `${(e.target).textContent}`;
        displayVal += (e.target).textContent;
        const displayDiv = document.querySelector('.display');
        displayDiv.innerHTML = displayVal;
        if (num1 === 0){
            num1 = parseInt(numVal);
            numVal = '';
        }else {
            num2 = parseInt(numVal);
            numVal = '';
        }
    } else if ((e.target).id === 'equals') {
        num2 = parseInt(numVal);
        numVal = '';
        operate(num1, operator, num2)
        const displayDiv = document.querySelector('.display');
        displayDiv.innerHTML = result;
    }
})
