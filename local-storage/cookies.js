const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const loginForm = document.querySelector('.login-form');
const buttonFormCall = document.querySelector('.button-call');
const buttonLogin = document.querySelector('.button-login')
const exitLogin = document.querySelector('.button-exit');
const form = document.forms.loginForm;


buttonFormCall.addEventListener('click', () => {
    showForm(loginForm);
})

buttonLogin.addEventListener('click', () => {
    pushCookies(form);
    getCookie('name', userName, 'Ім\'я користувача');
    getCookie('email', userEmail, 'Електронна пошта');
})

exitLogin.addEventListener('click', () => {
    deleteCookie('name');
    deleteCookie('email');
    deleteCookie('password');
})

window.addEventListener('DOMContentLoaded', () => {
    if (checkCookie('name') || checkCookie('email') || checkCookie('password')) {
        showForm(exitLogin);
        showForm(buttonFormCall);
    }
    getCookie('name', userName, 'Ім\'я користувача');
    getCookie('email', userEmail, 'Електронна пошта');
})

function showForm (block) {
    block.classList.toggle('hidden');
}

function pushCookies (obj) {
    if (obj.elements.name.value.trim() === '' || obj.elements.email.value.trim() === '' || obj.elements.password.value.trim() === '') {
        return;
    }

    const cookiesInfo = {
        name: obj.elements.name.value,
        email: obj.elements.email.value,
        password: obj.elements.password.value,
    }

    const date = new Date(Date.now() + 86440e3);
    date.toUTCString();

    if (cookiesInfo) {
        for (let key in cookiesInfo) {
            document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(cookiesInfo[key]) + '; expires=' + date + '; path=/';
        }
    }
}

function deleteCookie (name) {
    document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    location.reload();
}

function getCookie (name, pageString, baseString) {
    const cookies = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^}])/g, '\\$1') + "=([^;]*)"));
    pageString.textContent = cookies ? decodeURIComponent(cookies[1]) : baseString;
}

function checkCookie (name) {
    const cookies = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^}])/g, '\\$1') + "=([^;]*)"));
    return cookies ? decodeURIComponent(cookies[1]) : undefined;
}
