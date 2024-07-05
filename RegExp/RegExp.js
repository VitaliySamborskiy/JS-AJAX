const form = document.forms.myForm;
const button = document.querySelector('.submit');
const nameBlockMessage = document.querySelector('.name');
const emailBlockMessage = document.querySelector('.email');
const passwordBlockMessage = document.querySelector('.password');
const passwordConfirmBlockMessage = document.querySelector('.confirm-password');

form.addEventListener('input', () => {
    const user = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        confirmPassword: form.elements.confirmPassword.value,
    };
    validation(user);
});

function validation (obj) {
    try {
        createText(nameBlockMessage, obj.name);
        validationText(obj.name, /^[a-z]+$/gi,"Використано заборонені символи, дозволеними символами є [A-Z] та [a-z]");
    } catch (err) {
        createError(nameBlockMessage, err.message);
    }
    try {
        createText(emailBlockMessage, obj.email);
        validationText(obj.email, /^[a-z0-9]/gi, "Використано заборонені символи, дозволеними символами є [A-Z],[a-z] та [0-9]");
        validationText(obj.email, /@gmail.com/gi, "Некоректна пошта, відсутння частина [@gmail.com]");
    } catch (err) {
        createError(emailBlockMessage, err.message);
    }
    try {
        createText(passwordBlockMessage, obj.password);
        validationText(obj.password,/^[a-z0-9]/gi,"Використано заборонені символи, дозволеними символами є [A-Z],[a-z] та [0-9]");
    } catch (err) {
        createError(passwordBlockMessage, err.message);
    }
    try {
        createText(passwordConfirmBlockMessage, obj.confirmPassword);
        validationText(obj.confirmPassword, /^[a-z0-9]+$/gi, "Використано заборонені символи, дозволеними символами є [A-Z],[a-z] та [0-9]");
        if (obj.password !== obj.confirmPassword) {
            throw new Error("Паролі не співпадають")
        }
    } catch (err) {
        createError(passwordConfirmBlockMessage, err.message);
    }
}

function createError (item, errorText) {
    item.textContent = errorText;
    item.style.color = 'red';
}

function createText (item, objKey) {
    if (objKey.trim() === '') {
        throw new Error("Значення не ведено!")
    }
    item.textContent = "Чудово!";
    item.style.color = 'green';
}

function validationText(objKey, regExp, text) {
    if (!regExp.test(objKey)) {
       throw new Error(text);
    }
}
