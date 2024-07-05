`use strict;`

// ---------------------------------------------------------------------------------------------------------------------

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null,
                }
            }
        }
    }
}

function listReader (list) {
    console.log(list.value);
    if (list.next) {
        listReader(list.next);
    }
}
listReader(list);

list = { value: "new item", next: list };
listReader(list);

list =  list.next.next.next
listReader(list);

// --------------------------------------------------------------------------------------------------------------------

function fuctorial (num) {
    if (num == 1) {
        return num;
    } else {
        return num *= fuctorial(num - 1);
    }
}

console.log(fuctorial(5));

//----------------------------------------------------------------------------------------------------------------------

let company = {
    sales: [{
        name: 'Іван',
        salary: 1000
    }, {
        name: 'Аліса',
        salary: 1600
    }],

    development: {
        sites: {
            sitesA: [{
                name: 'Петро',
                salary: 2000
            }, {
                name: 'Олександр',
                salary: 1800
            }],

            sitesB: [{
                name: 'Антон',
                salary: 1900
            }, {
                name: 'Олег',
                salary: 2200
            }],
        },

        internals: [{
            name: 'Евген',
            salary: 1300
        }],

        qa: [{
            name: 'Анатолій',
            salary: 1700
        }, {
            name: 'Володимр',
            salary: 1500
        }],
    }
};

function sumSalary (comp) {
    if (Array.isArray(comp)) {
        return comp.reduce((sum, item) => sum + item.salary, 0)
    } else  {
        let sum = 0;
        for (let subDep of Object.values(comp)) {
            sum += sumSalary(subDep);
        }
        return sum;
    }
}

console.log(sumSalary(company));