const form = document.forms.myForm;
let user = null;

form.addEventListener('input', () => {
    user = formObj();
    storage(user);
});

window.addEventListener('load', () => {
    const load = JSON.parse(sessionStorage.getItem('localStorage'));
    if (load) {
        loadStorageForm(form, load);
    }
});

function storage(obj) {
    sessionStorage.setItem('localStorage', JSON.stringify(obj));
}

function loadStorageForm(nameForm, loadStorage) {
    const formKeys = Object.keys(nameForm.elements);

    formKeys.forEach(key => {
        if (loadStorage.hasOwnProperty(key)) {
            nameForm.elements[key].value = loadStorage[key];
            nameForm.elements[key].checked = loadStorage[key];
        }
    });
}

function formObj() {
    return {
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        confirmPassword: form.elements.confirmPassword.value,
        phone: form.elements.phone.value,
        address: form.elements.address.value,
        country: form.elements.country.value,
        terms: form.elements.terms.checked,
    };
}
