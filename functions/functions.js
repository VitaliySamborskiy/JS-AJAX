'use strict';

let question = confirm('Ви хочете підтвердити своє замовлення?');

function showAlert (bollen) {
    if (bollen === true) {
        alert('замовлення підтверджено!');
    } else {
        alert('замовлення відхилино!');
    }
}

showAlert(question);

// ----------------------------------------------------------

let funcCalk = function (arg1, arg2, signs) {
    let sum = 0;
    if (signs === "+") {
        sum = arg1 + arg2;
    } else if (signs === "-") {
        sum = arg1 - arg2;
    } else if (signs === "*") {
        sum = arg1 * arg2;
    } else  {
        sum = arg1 / arg2;
    }
    return sum;
}

let  operandOne = 40;
let operandTwo = 20;
let signs = "*";

console.log(funcCalk(operandOne, operandTwo, signs));

// ----------------------------------------------------------

let email = "email@email.com";
let nameGadget = "Samsung Galaxy M15 5G 4/128GB Light Blue (SM-M156BLBUEUC)"
let questionUser  = confirm(`Ви увійшли в "${email}" на пристрої "${nameGadget}" ?`);

function confirmation (question, yes, no) {
    if (question === true) {
        yes();
    } else  {
        no();
    }
}

confirmation( questionUser,
    () => {alert(`Ви підтвердили вхід в "${email}" на пристрій "${nameGadget}"`)},
    () => {alert(`Ви відхилили вхід в "${email}" на пристрій "${nameGadget}"`)}
);

// ----------------------------------------------------------

function f (...arg) {
    let sum = 0;
    sum = arg

}

f(1, 2, 3, 4, 5);

