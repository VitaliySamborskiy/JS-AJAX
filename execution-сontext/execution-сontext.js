
console.log(this);


function showGlobalContext () {
    console.log(this);
}

showGlobalContext();

//втрата this


const user = {
    firstName: 'Владислав',
    sayHi() {
        console.log(this.firstName)
    }
}

setTimeout(user.sayHi, 1000);

//збереження контексту


const user2 = {
    firstName: 'Олександр',
    sayHi() {
       console.log(this.firstName);
    }
}

setTimeout(() => {
    user2.sayHi()
}, 1000);

// bind


let user4 = {
    firstName: 'Олег',
    age: 32,
}

function func() {
    console.log(this.firstName);
    console.log(this.age);
}



const contextBind = func.bind(user4);
contextBind();

function func2(text) {
    console.log(this.firstName + ' ' + text);
}

const contextBind2 = func2.bind(user4);
contextBind2('Привіт');



const user3 = {
    firstName: 'Вадим',
    sayHi() {
        console.log(this.firstName);
    }
}

const sayHi = user3.sayHi.bind(user3);

setTimeout( sayHi , 1000);

// Часткове застосування

function addition (a, b){
    console.log(a + b);
}

let bindAdding = addition.bind(null, 3);

bindAdding(5);
bindAdding(7);
bindAdding(9);

// call


const person = {
    name: 'Alice',
    read: function () {
        console.log(`Привіт: ${this.name}`)
    }
}

const person2 = {
    name: 'Bob',
}

person.read.call(person2);

// apply


const person3 = {
    name: 'Alice',
    read: function () {
        console.log(`Привіт: ${this.name}`)
    }
}

const person4 = {
    name: 'Bob',
}

person3.read.apply(person4);

const obj = {
    name: 'Bob',
    funk: (age, work) => {
        console.log(`Імя: ${this.name}, Вік: ${age} , Робота: ${work}`);
}
};

const obj2 = {
    name: 'Alice',
}

obj.funk.apply(obj2, [23, "front-end"]);

function delay (f, sm) {
    return function () {
        setTimeout(() => {
            f.apply(this, arguments);
        }, sm);
    };
}

function alertMessage(message) {
    alert(message);
}

// створюємо обгортки
let f1000 = delay(alertMessage, 1000);
let f1500 = delay(alertMessage, 1500);

f1000("тест"); // показує "test" після 1000 мс
f1500("тест");
