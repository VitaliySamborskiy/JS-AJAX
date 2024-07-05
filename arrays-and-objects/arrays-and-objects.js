let obj = {
    name: "Іvan",
    age: 21,
    admin: true,
    id: 2320596585667788776n,
    ['like product']: ['jeans', 'hat',],
};

console.log(obj.admin);
console.log(obj['like product']);

obj.age = 22;
console.log(obj.age);

obj.transport = true;
console.log(Object.keys(obj));

delete obj.admin;
console.log(Object.keys(obj));

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arr.length);

arr[6] = 't';
console.log(arr.length);

arr.shift();
console.log(arr.length);

arr.unshift('aaa');
console.log(arr.length);

arr.push('sss', 'ggg', "ttt");
console.log(arr.length);

arr.pop();
console.log(arr.length);

for (let value of arr) {
    console.log(value);
}

arr.length = 3;
console.log(arr.length);
