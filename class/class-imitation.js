class Product {
    #id;
    #price;

    constructor(info) {
        this.name = info.name;
        this.description = info.description;
        this.#price = parseFloat(info.price);
        this.#id =  Math.random().toString(36).substr(2, 9);
    }

    get id() {
        return this.#id;
    }

    get priceProduct() {
        return this.#price;
    }

    _setPrise() {
        return `${this.#price.toFixed(2)} грн`;
    }

    _setDescription() {
        if (this.description) {
            return this.description;
        }
        return `${this.name} - ${this._setPrise()}`;
    }
}

class CardProduct extends Product {
    constructor(info) {
        super(info);
        this.url = info.url;
    }

    renderHTML() {
        return `
        <div class="card col-md-4 product-card ${this.discount ? "border-danger promotional" : ""}" data-id="${this.id}">
            <img src="${this.url}" alt="${this.name}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this._setDescription()}</p>
                <strong class="card-text">${this.discount ? this._renderPrise() : this._setPrise()}</strong>
                <button class="btn btn-danger mt-2 remove">Remove</button>
            </div>
        </div>
        `;
    }
}

class PromotionalProduct extends CardProduct {
    constructor(info) {
        super(info);
        this.discount = parseFloat(info.discount);
    }

    _setPriseDiscount() {
        return this.priceProduct * (1 - this.discount);
    }

    _renderPrise() {
        const discountPrise = this._setPriseDiscount();
        return `<del>${super._setPrise()}</del> ${discountPrise.toFixed(2)} грн`;
    }
}

const form = document.forms.productForm;
const listProducts = document.querySelector('.productsList');
let products = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let info = {
        name: form.elements.form_name.value,
        price: form.elements.form_price.value,
        description: form.elements.form_description.value,
        url: form.elements.form_image.value,
        discount: form.elements.form_discount.value,
    }

    let product;
    if (info.discount) {
        product = new PromotionalProduct(info);
    } else {
        product = new CardProduct(info);
    }
    products.push(product);
    renderListProduct();
    form.reset();
});

listProducts.addEventListener('click', (event) => {
    const removeButton = event.target.closest('.remove');
    if (removeButton) {
        const card = removeButton.closest('.card');
        resetCard(card.dataset.id);
    }
});

function renderListProduct() {
    listProducts.innerHTML = products.map(item => item.renderHTML()).join('');
}

function resetCard(id) {
    products = products.filter(product => product.id !== id);
    renderListProduct();
}