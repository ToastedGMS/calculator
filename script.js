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

document.addEventListener('keydown', e => {
    console.log(e)
    switch (e.code) {
        case 'Numpad0':
        case 'Numpad1':
        case 'Numpad2':
        case 'Numpad3':
        case 'Numpad4':
        case 'Numpad5':
        case 'Numpad6':
        case 'Numpad7':
        case 'Numpad8':
        case 'Numpad9':
            numVal += parseInt(e.key);
            displayVal += e.key;
            const displayDiv = document.querySelector('.display');
            displayDiv.innerHTML = displayVal;
            break;
        case 'NumpadAdd':
        case 'NumpadSubtract':
        case 'NumpadMultiply':
        case 'NumpadDivide':
            if (operator === ''){
                operator += e.key;
                displayVal += e.key;
                const displayDiv = document.querySelector('.display');
                displayDiv.innerHTML = displayVal;
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
                operator += e.key;
                displayDiv.innerHTML += e.key;}
                break;
        case 'NumpadEnter':
            num2 = parseFloat(numVal);
            numVal = '';
            operate(num1, operator, num2)
            const displayDiv1 = document.querySelector('.display');
            displayDiv1.innerHTML = result;
            break;
        case 'NumpadComma':
            if (numVal.includes(e.key)){
                alert('Please type only one decimal');
            } else {
                numVal += e.key;
                displayVal += e.key;
                const displayDiv = document.querySelector('.display');
                displayDiv.innerHTML = displayVal;}
                break;
        case 'KeyC':
        case 'Space':
            window.location.reload();
            break;
    }
})