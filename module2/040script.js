'use strict';

const now = new Date('2021-02-10');
// new Date.parse('2021-02-10');

console.log(now);

// console.log(now.getMilliseconds());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

console.log(now.setHours(40));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000000; i++) {
    let some = i ** 9999999999999;
}

let end = new Date();

alert(`Cycle have worked ${end - start} msec`);