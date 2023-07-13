// main 'operate' function (executes basic math)
let result = 0;
let num1 = 0;
let num2 = 0;
let operator = '';
function operate(num1, operator, num2) {
    console.log(num1, operator, num2)
    switch (operator){
     case '+':{
         result = (num1+num2).toFixed(2);
         return result;
         break;
     }
     case '-':{
          result = (num1-num2).toFixed(2);
          return result;
          break;
     }
     case '*':{
         result = (num1*num2).toFixed(2);
         return result;
         break;
     }
     case '/':{
         result = (num1/num2).toFixed(2);
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
    
    function display(){
        displayVal += (e.target).textContent;
        const displayDiv = document.querySelector('.display');
        displayDiv.innerHTML = displayVal;}
    
    if ((e.target).className === 'numBtn'){
        numVal += (e.target).textContent;
        display();
    } else if ((e.target).className === 'operator'){
        if (operator === ''){
        operator += `${(e.target).textContent}`;
        display();
        num1 = parseFloat(numVal);
        numVal = '';
        } else if (operator != ''){
            num2 = parseFloat(numVal);
            numVal = '';
            operate(num1, operator, num2);
            operator = '';
            num1 = parseFloat(result);
            displayVal = '';
            const displayDiv = document.querySelector('.display');
            displayDiv.innerHTML = num1;
            operator += `${(e.target).textContent}`;
            displayDiv.innerHTML += `${(e.target).textContent}`;}
    } else if ((e.target).id === 'equals') {
        num2 = parseFloat(numVal);
        numVal = '';
        operate(num1, operator, num2)
        const displayDiv = document.querySelector('.display');
        displayDiv.innerHTML = result;
    } else if ((e.target).id === 'clear') {
        window.location.reload();
    } else if ((e.target).id === 'decimal') {
        if (numVal.includes(`${(e.target).textContent}`)){
            alert('Please type only one decimal');
        } else {
            numVal += `${(e.target).textContent}`;
            display();}
    }
})
