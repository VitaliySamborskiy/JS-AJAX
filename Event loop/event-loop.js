const button = document.querySelector('.load-button');
const container = document.querySelector('.block-container');
const progress = document.querySelector('.progress-bar');
const removeButton = document.querySelector('.remove-button');
const clickButton = document.querySelector('.changeShapeBtn');
const containerClick = document.querySelector('.shape-container');
let i = 0;
let prog = 0;
let numberColor = 0x000000;
let count = 1;

button.addEventListener('click', createDiv);
removeButton.addEventListener('click', removeDiv);
clickButton.addEventListener('click', formModify);

function createDiv () {
    if (i == 25000) {
        return
    } else {
        setTimeout(createDiv, 0);
    }

    do {
        prog = (i / 25000) * 100;
        i++
        if (numberColor === 0xffffff) {
            numberColor = 0x000000;
        }
        progress.style.width = +prog + '%'
        numberColor++
        const div = document.createElement('div');
        div.style.minWidth = '5px';
        div.style.height = '5px';
        div.classList.add('color-block')
        div.style.backgroundColor = "#" + numberColor.toString(16).padStart(6, '0');
        container.appendChild(div);
    } while (i % 1e2 != 0);
}

function removeDiv () {
     const  removeBlock = Array.from(document.querySelectorAll('.color-block'));
    if (removeBlock.length == 0) {
        return;
    } else {
        setTimeout(removeDiv, 0);
    }
    do {
        prog = (i / 25000) * 100;
        i--
    } while (i % 1e2 != 0);
    removeBlock.slice(0, 1e2).forEach(element => element.remove());
    progress.style.width = +prog + '%'
}

function formModify () {
    count++
    const block = containerClick.firstElementChild;

    if (count > 5) {
        count = 1;
    }

    console.log(count);

    switch (count) {
        case 1 :
            block.className = "shape";
            break;
        case 2 :
            block.className = "triangle";
            break;
        case 3 :
            block.className = "square";
            break;
        case 4 :
            block.className = "pentagon";
            break;
        case 5:
            block.className = "hexagon";
            break;
    }
}
