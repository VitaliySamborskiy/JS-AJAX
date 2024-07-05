"use strict";

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let j = "0";
do {
    console.log(j)
    j++
} while (j < 2)


let sum = 0;
while (true) {
    let prop = +prompt('Ведіть число для додавання');
    console.log(sum);
    if (!prop) break;
    sum += prop;
}


for (let i = 0; i < 8; i++) {
    console.log(i);
}


let obg = {
    name: "Vi",
    age: 28,
    city: "Kyiv",
    id: 43505,
}

for (let key in obg) {
    console.log(key);
}

let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}