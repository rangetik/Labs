const phoneBook = {
    Marcus: "+380445554433",
    Ivan: "+380977777777",
    Valik: "+380928282828",
};

const findPhoneByName = (name) => phoneBook[name];

console.log(findPhoneByName('Marcus'));
console.log(findPhoneByName('Ivan'));
console.log(findPhoneByName('Valik'));
console.log(findPhoneByName('Carl'));

// const phoneBook = new Map([
//     ['Marcus', '+380445554433'],
//     ['Ivan', '+380977777777'],
//     ['Valik', '+380928282828']
// ]);

// const findPhoneByName = name => phoneBook.get(name);

// console.log(findPhoneByName('Marcus'));
// console.log(findPhoneByName('Ivan'));
// console.log(findPhoneByName('Valik'));
// console.log(findPhoneByName('Carl'));    