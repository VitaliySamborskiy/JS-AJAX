let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next () {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true}
            }

        }
    }
}

for (let value of range) {
    console.log(value);
}

const myObject = {
    name: 'John',
    age: 30,
    city: 'Kyiv'
};

myObject[Symbol.iterator] = function () {
    let valueElement = Object.entries(this);
    let index = 0;

    return {
        next() {
            if (index < valueElement.length) {
                return {done: false, value: valueElement[index++],}
            } else {
                return {done: true,};
            }
        }
    }
}

for (let value of myObject) {
    console.log(value);
}