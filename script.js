const operation = document.querySelector(".operation");
const result = document.querySelector(".result");

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operand");

const annul = document.querySelector('.annul');
const equal = document.querySelector('.equal');

annul.addEventListener('click', annulation);

function annulation(e) {
    if (result.textContent.length == 1) {
        result.textContent = 0;
    } else {
        result.textContent = result.textContent.substring(0, result.textContent.length - 1);
    }
}

numbers.forEach(number => number.addEventListener('click', write));

function write(e) {
    if (result.textContent == 0) {
        result.textContent = this.textContent;
    } else if (result.textContent.length == 14) {
        return;
    } else {
        result.textContent += this.textContent;
    }
}

operations.forEach(operation => operation.addEventListener('click', doMath));

function doMath(e) {
    const calculation = operation.textContent.split(' ');
    if (operation.textContent == 0) {
        operation.textContent = result.textContent + " " + this.textContent;
        result.textContent = 0;
    } else if (calculation.length == 2) {
        if (calculation[1] == "+") {
            result.textContent = Math.round((parseFloat(calculation[0]) + parseFloat(result.textContent)) * 100) / 100;
            operation.textContent = result.textContent + " " + this.textContent;
            result.textContent = 0;
        } else if (calculation[1] == "-") {
            result.textContent = Math.round((parseFloat(calculation[0]) - parseFloat(result.textContent)) * 100) / 100;
            operation.textContent = result.textContent + " " + this.textContent;
            result.textContent = 0;
        } else if (calculation[1] == "*") {
            result.textContent = Math.round((parseFloat(calculation[0]) * parseFloat(result.textContent)) * 100) / 100;
            operation.textContent = result.textContent + " " + this.textContent;
            result.textContent = 0;
        } else if (calculation[1] == "/") {
            result.textContent = Math.round((parseFloat(calculation[0]) / parseFloat(result.textContent)) * 100) / 100;
            operation.textContent = result.textContent + " " + this.textContent;
            result.textContent = 0;
        }
    } else {
        operation.textContent = 0;
        result.textContent = 0;
    }   
}

equal.addEventListener('click', equalize);

function equalize(e) {
    const calculation = operation.textContent.split(' ');
    if (calculation.length != 2) {
        return;
    } else {
        operation.textContent += " " + result.textContent + " " + "=";
        if (calculation[1] == "+") {
            result.textContent = Math.round((parseFloat(calculation[0]) + parseFloat(result.textContent)) * 100) / 100;
        } else if (calculation[1] == "-") {
            result.textContent = Math.round((parseFloat(calculation[0]) - parseFloat(result.textContent)) * 100) / 100;
        } else if (calculation[1] == "*") {
            result.textContent = Math.round((parseFloat(calculation[0]) * parseFloat(result.textContent)) * 100) / 100;
        } else if (calculation[1] == "/") {
            result.textContent = Math.round((parseFloat(calculation[0]) / parseFloat(result.textContent)) * 100) / 100;
        }
    }
}

const reset = document.querySelector(".reset");

reset.addEventListener('click', res);

function res(e) {
    operation.textContent = 0;
    result.textContent = 0;
}