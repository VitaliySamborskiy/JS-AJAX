const buttonClick = document.querySelector('.button');
const keyInstallation = document.querySelector('.form-group');

buttonClick.addEventListener('click', getKey)

function* generateSymbols (start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

function* generateKeys () {
    yield* generateSymbols(48, 57);
    yield* generateSymbols(65, 90);
    yield* generateSymbols(97, 122);
}

let symbols = [];
for (let symbol of generateKeys()) {
    symbols.push(String.fromCharCode(symbol))
}

function getKey () {
    const removeValue = document.querySelector('.border');
    if (removeValue){
        removeValue.remove();
    }
    
   let key = '';
    let random;
    for (let i = 1; i <= 20; i++) {
       random = Math.floor(Math.random() * symbols.length);
       key += symbols[random]
    }

    const div = document.createElement('div')
    div.className ='border text-center p-3'
    const paragraph = document.createElement('p');
    paragraph.className = 'font-weight-bold text-center'
    paragraph.textContent = `ваш ключ: ${key}`;
    div.appendChild(paragraph);
    keyInstallation.appendChild(div);
}
