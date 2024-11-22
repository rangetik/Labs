const phoneBook = [
    { name: "Marcus", phone: "+380445554433" },
    { name: "Ivan", phone: "+380977777777" },
    { name: "Valik", phone: "+380928282828" }
];

const findPhoneByName = (name) => {
    for (let i of phoneBook) {
        if (i.name == name) {
            return i.phone;
        }
    }
    return "Phone not found";
}

console.log(findPhoneByName('Marcus'));
console.log(findPhoneByName('Ivan'));
console.log(findPhoneByName('Valik'));
console.log(findPhoneByName('Carl'));