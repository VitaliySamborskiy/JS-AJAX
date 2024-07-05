"use strict";

//------------------------------------основные типы данных--------------------------------------------------------------

let  string = "text";
let number = 100;
let boolean = true;
let hollow= undefined;
let zero = null;
let bigInt = 2310954378476364535439n;
let symbol = Symbol('id');
let object = {
    name: 'Vitalii',
    age: 21,
};

console.log(typeof string);
console.log(typeof number);
console.log(typeof bigInt);
console.log(typeof boolean);
console.log(typeof symbol);
console.log(typeof hollow);
console.log(typeof zero);
console.log(typeof object);