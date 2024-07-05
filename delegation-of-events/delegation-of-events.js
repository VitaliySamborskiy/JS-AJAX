const cards = document.querySelector('.container');
const notificationBlock = document.querySelector('.notification');

cards.addEventListener('click', (event) => {
    const add = event.target.dataset.add;
    const subtract = event.target.dataset.subtract;

    counter(event, add, subtract);
    likeToggle(event.target.closest('.favorite-btn'));
    createWindow(event.target.closest('.buy-btn'), notificationBlock);
});

notificationBlock.addEventListener('click', (event) => {
    const closePopup = event.target.closest('.close');
    const popup = event.target.closest('.popup');
    popupClose(closePopup, popup);
})

function counter (target, counterAdd, counterSubtract) {
    const counter = target.target.parentNode.querySelector('.quantity');
    if (counterAdd) {
        counter.textContent++;
    }
    if (counterSubtract) {
        if (counter.textContent > 1) {
            counter.textContent--;
        }
    }
}

function createWindow (clickItem, classWindow) {
    if (clickItem) {
        const text = document.createElement('p');
        text.textContent = "Товар був придбаний!";

        const span = document.createElement('span');
        span.textContent = "закрити";
        span.classList.add('close');

        const fill = document.createElement('div');
        fill.classList.add('popup-content');
        const wrapper = document.createElement('div');
        wrapper.classList.add("popup");

        fill.appendChild(text);
        fill.appendChild(span);
        wrapper.appendChild(fill);
        classWindow.appendChild(wrapper);
    }
}

function popupClose (close, popup) {
    if (close) {
        popup.remove();
    }
}

function likeToggle (clickItem) {
    if (clickItem) {
        clickItem.classList.toggle('favorite-btn-active');
    }
}
