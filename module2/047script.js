'use strict';


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//             function shout() {
//                 console.log(this);
//             }
//         shout();
//     }
// };

// obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 23);

console.log(ivan);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

// 1) Обычная функция: this = window, если стоит use strict, то this = undefined
// 2) Контекст у методов объекта – сам объект