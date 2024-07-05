'use strict';

function f () {
    let count = 0;

    return function () {
        return count++
    }
}

const counter = f();

console.log(counter());
console.log(counter());

//----------------------------------------------------------------------------------------------------------------------

function sequence (arr) {
    let currentIndex = 0;

    this.next = function () {
        currentIndex = ( currentIndex + 1) % arr.length;
        return arr[currentIndex];
    }

    this.back = function () {
        currentIndex = ( currentIndex - 1 + arr.length ) % arr.length;
        return arr[currentIndex];
    }

    this.searchValue = function (index) {
        currentIndex = index % arr.length;
        return arr[currentIndex];
    }

    this.current = function () {
        return arr[currentIndex];
    }

    this.getCurrentIndex = function () {
        return currentIndex;
    }

    this.reset = function () {
        return currentIndex = 0;
    }
}

const numbers = [10, 20, 30, 40, 50];
const seguences = new sequence(numbers);

console.log(seguences.getCurrentIndex());
console.log(seguences.next());
console.log(seguences.next());
console.log(seguences.back());
console.log(seguences.current());
console.log(seguences.reset());
console.log(seguences.searchValue(4));
