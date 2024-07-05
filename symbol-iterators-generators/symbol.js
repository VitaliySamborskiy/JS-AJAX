const sym1 = Symbol('sym');
const sym2 = Symbol('sym');
console.log(sym1 == sym2);
console.log(sym1 === sym2);

const user = {
    name: 'John',
    email: 'john@example.com',
}
user[sym1] = 54;
console.log(user);
for (key in user) {
    console.log(user[key]);
}

const sym3 = Symbol.for('sym');
const sym4 = Symbol.for('sym');
console.log(sym3 == sym4);
console.log(sym3 === sym4);