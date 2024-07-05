"use strict";

// --------------------------------------------Условные операторы-------------------------------------------------------

let name = "Nik";

if (name !== undefined) {
    console.log(`ім'я веденно`);
} else  {
    console.log("імя не ведено");
}

let  age = 18;
let verification = age >= 18 ? console.log('ви досягли повноліття') : console.log('вам не достатньо років');