
        let num1 = '';
        let num2 = '';
        let operation = '';
        let isSecondNumber = false;

        const display = document.getElementById('display');

        function appendNumber(number) {
            if (isSecondNumber) {
                num2 += number;
                display.value = num2;
            } else {
                num1 += number;
                display.value = num1;
            }
        }

        function setOperation(op) {
            if (num1 === '') {
                return; 
            }
            operation = op;
            isSecondNumber = true;
            display.value = ''; 
        }

        function calculateResult() {
            if (num1 === '' || num2 === '' || operation === '') return;
 let result;
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);

            switch (operation) {
                case '+':
                    result = n1 + n2;
                    break;
                case '-':
                    result = n1 - n2;
                    break;
                case '*':
                    result = n1 * n2;
                    break;
                case '/':
                    result = n1 / n2;
                    break;
                default:
                    result = 'Error';
            }

            display.value = result;
            num1 = result.toString(); // Store result for further operations
            num2 = '';
            operation = '';
            isSecondNumber = false;
        }

        function clearDisplay() {
            num1 = '';
            num2 = '';
            operation = '';
            isSecondNumber = false;
            display.value = '';
        }
    






// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');
// let ans = document.getElementById('Result');
// let add = document.getElementById('add');
// let subtract = document.getElementById('subtract');
// let multiply = document.getElementById('multiply');
// let divide = document.getElementById('divide');

// function addNumbers ( ){
//     let result = parseInt(num1.value) + parseInt(num2.value);
//     ans.innerText = result;
// }
// add.onclick = addNumbers

// function subNumbers ( ){
//     let result = parseInt(num1.value) - parseInt(num2.value);
//     ans.innerText = result;
// }
// subtract.onclick = subNumbers

// function multiplyNumbers ( ){
//     let result = parseInt(num1.value) * parseInt(num2.value);
//     ans.innerText = result;
// }
// multiply.onclick = multiplyNumbers

// function divideNumbers ( ){
//     let result = parseInt(num1.value) / parseInt(num2.value);
//     ans.innerText = result;
// }
// divide.onclick = divideNumbers