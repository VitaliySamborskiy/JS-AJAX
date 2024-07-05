const company = {
    name: "Acme Corporation",
    departments: [
        {
            name: "IT Department",
            employees: [
                { name: "Alice", position: "Developer" },
                { name: "Bob", position: "System Administrator" }
            ]
        },
        {
            name: "Marketing Department",
            employees: [
                { name: "Charlie", position: "Marketing Manager" },
                { name: "David", position: "Graphic Designer" }
            ]
        }
    ]
};

let json = JSON.stringify(company);
console.log(json);


let obj = JSON.parse(json);
console.log(obj);


const hotelNumber = {
    number: 34,
    over: 5,
}
const hotel = {
    name: 'Hotel',
    clients: [{name: 'Alex'},{ name: 'Alina'}],
    place: hotelNumber,
}

hotelNumber.occupiedBy = hotel;

const json1 = JSON.stringify(hotel, (key, value) => {
    return (key == 'occupiedBy') ? undefined : value;
});
console.log(json1);


const str = '{"title":"Конференція","date":"2024-06-12T11:00:00.000Z"}';
const obj2 = JSON.parse(str, (key, value) => {
    if (key == 'date') return new Date(value);
    return value;
})
console.log(obj2);

// return JSON.parse(JSON.stringify(data));
