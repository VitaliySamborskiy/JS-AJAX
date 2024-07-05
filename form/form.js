function createDiv () {
    let div = document.querySelector(".container");
    let b = document.querySelector(".bor");
    let f = document.querySelector(".fil");
    let form = document.forms.myForm;
    let fill = form.fill.checked;
    let border =form.border.checked;
    let colorFill = form.colorFill.value;
    let colorBorder = form.colorBorder.value;
    let fo = form.form.value;

    if (fill) {
        div.style.width = '150px';
        div.style.height = '150px';
        div.style.backgroundColor = `${colorFill}`;
    } else {
        div.style.backgroundColor = 'transparent';
    }
    if (border) {
        div.style.width = '150px';
        div.style.height = '150px';
        div.style.border =`solid 3px ${colorBorder}`;
    } else {
        div.style.border = `0px`;
    }

    if (b) {
        b.remove();
    }
    if (f) {
        f.remove();
    }

    div.style.borderRadius = '0%';
    div.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';

    switch (fo) {
        case `formCircle`: {
            div.style.borderRadius = '100%';
            break;
        }
        case `formRectangle`: {
            div.style.width = '250px';
            break;
        }
        case `formTriangle`: {
            let bor = document.createElement('div');
            let fil = document.createElement('div');
            div.style.backgroundColor = 'transparent';
            div.style.border = `0px`;
            fil.style.width = '150px';
            fil.style.height = '150px';
            fil.style.backgroundColor =`${colorFill}`;
            fil.classList.add('fil');
            fil.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            if (fill) {
                div.appendChild(fil);
            }
            if (border) {
                bor.classList.add('bor');
                bor.style.padding = '3px';
                bor.style.height = '144px';
                bor.style.backgroundColor = `${colorBorder}`;
                bor.style.clipPath = 'polygon(0% 100%, 3% 100%, 50% 7%, 95% 97%, 2% 97%, 0 100%, 100% 100%, 50% 0)';
                fil.appendChild(bor);
                // bor.appendChild(fil);
                div.appendChild(fil);
            }

            break;
        }
        case `formSquare`: {
            div.style.width = '150px';
            break;
        }
    }
}