let name = undefined;
let lastname = null;
let bol = true;
let number = 0;
let number2 = 21;

console.log(name || lastname || `Ім\'я користувача`);

console.log(number2 && bol && "Всі значееня наявні");

if (!bol) {
    console.log('Значення вірне');
} else {
    console.log('Значення хибне');
}

console.log(lastname ?? 'Ім\'я користувача');
console.log(number ?? 'Ім\'я користувача');
