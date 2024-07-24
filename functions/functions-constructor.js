const form = document.forms.personForm;
const button = document.querySelector('.button');
const output = document.querySelector('.output');
let users = [];

button.addEventListener('click', () => {
    let person = user(form);
    users.push(new Person(person.name, person.age, person.gender));
    userRender(users.shift());
});

function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

function user(form) {
    if (form.elements.name.value.trim() && form.elements.age.value.trim() && form.elements.gender.value.trim()) {
        return {
            name: form.elements.name.value,
            age: form.elements.age.value,
            gender: form.elements.gender.value,
        };
    } else {
        alert('Поля не до кінця заповнені!');
    }
}

function userRender (user) {
    let body = document.createElement('div');
    body.className = 'card mb-3 p-3';

    let name = document.createElement('p');
    name.className = 'card-text';
    name.textContent = `Ім'я: ${user.name}`;

    let age = document.createElement('p');
    age.className = 'card-text';
    age.textContent = `Вік: ${user.age}`;

    let gender = document.createElement('p');
    gender.textContent = `Гендер: ${user.gender}`;
    gender.className = 'card-text';

    body.appendChild(name);
    body.appendChild(age);
    body.appendChild(gender);
    output.appendChild(body);
}
