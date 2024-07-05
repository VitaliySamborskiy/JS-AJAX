const click = document.querySelector('.button');
const errorName = document.querySelector('.error-name');
const errorSurname = document.querySelector('.error-surname');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');
const errorSex = document.querySelector('.error-sex');
const errorConfirmed = document.querySelector('.error-checkbox');
const form = document.forms.register;


click.addEventListener('click', () => {
    const user = {
        name: form.elements.userName.value,
        surname: form.elements.userSurname.value,
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
        passwordRepeats: form.elements.userPasswordRepetitions.value,
        sex: form.elements.userSex.value,
        userConfirmed: form.elements.userCheckbox.checked,
    };

    clearErrorMessage( errorName, errorSurname, errorEmail, errorPassword, errorSex, errorConfirmed);
    formValidation(user);
});

function formValidation(obj) {
    try {
        if (obj.name === '') {
            throw new Error('Ім\'я користувача не ведено!');
        }
    } catch (error) {
        createError(errorName, error.message);
    }

    try {
        if (obj.surname === '') {
            throw new Error('прізвище користувача не ведено!')
        }
    } catch (error) {
        createError(errorSurname, error.message);
    }

    try {
        if (obj.email.trim() === '') {
            throw new Error('Відсутне значення почти!')
        }
        if (!obj.email.includes('@')) {
            throw  new  Error('Некоректна почта, відсутній знак @!')
        }
    } catch (error) {
        createError(errorEmail, error.message);
    }

    try {
        if (obj.password.trim() === '') {
            throw new Error('Пароль користувача не ведено!');
        }
        if (obj.passwordRepeats.trim() === '') {
            throw  new  Error('Для валідації необхідно повторити пароль!')
        }
        if (obj.password !== obj.passwordRepeats) {
            throw new  Error('Паролі не співпадають!')
        }
    } catch (error) {
        createError(errorPassword, error.message);
    }

    try {
        if (!obj.sex) {
            throw new Error('Не вибрана стать')
        }
    } catch (error) {
        createError(errorSex, error.message);
    }

    try {
        if (!obj.userConfirmed) {
            throw new Error('Ви не погодилися з користувацькою угодою')
        }
    } catch (error) {
        createError(errorConfirmed, error.message);
    }
}

function clearErrorMessage (...classError) {
    classError.forEach((element) => {
        element.textContent = '';
    })
}

function createError (classError, textError) {
    classError.textContent = textError;
    classError.style.color = 'red';
}