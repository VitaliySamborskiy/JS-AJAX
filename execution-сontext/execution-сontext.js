
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

const user3 = {
    firstName: 'Вадим',
    sayHi() {
        console.log(this.firstName);
    }
}

const sayHi = user3.sayHi.bind(user3);

setTimeout( sayHi , 1000);
