const button = document.querySelector('.button');
const buttonRemove = document.querySelector('.button-remove');
const stylePage = document.body;
const form = document.forms.styleForm;


button.addEventListener('click',() => {
    const stylesPage = form.elements.formControl.value;
    const fontsSize = form.elements.formFont.value;
    stylePage.className = '';
    fontSizeToggle(fontsSize, stylePage);
    backgroundToggle(stylesPage, stylePage);
    storageStyle(stylesPage, fontsSize);
});

buttonRemove.addEventListener('click',() => {
    stylePage.className = '';
    localStorage.clear();
})

window.addEventListener('DOMContentLoaded', () => {
    storageStyleLoad(stylePage);
})

function fontSizeToggle (size, obj) {
    switch (size) {
        case 'font-small': {
            obj.classList.add('font-small');
            break;
        }
        case 'font-medium': {
            obj.classList.add('font-medium');
            break;
        }
        case 'font-large': {
            obj.classList.add('font-large');
            break;
        }
    }
}

function backgroundToggle (background ,obj) {
    switch (background) {
        case 'theme-default': {
            obj.classList.add('theme-default');
            break;
        }
        case "theme-green": {
            obj.classList.add('theme-green');
            break;
        }
        case "theme-dark": {
            obj.classList.add('theme-dark');
            break;
        }
        case "theme-blue": {
            obj.classList.add("theme-blue");
            break
        }
    }
}

function storageStyle (background, font) {
      localStorage.setItem('background', background);
      localStorage.setItem('font', font);
}

function storageStyleLoad (obj) {
    const background = localStorage.getItem('background');
    const font = localStorage.getItem('font');
    backgroundToggle(background, obj);
    fontSizeToggle(font, obj);
}