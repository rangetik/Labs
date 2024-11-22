const fn = () => {
    const obj1 = { name: 'Ivan' };
    let obj2 = { name: 'Valik' };

    console.log(obj1);
    console.log(obj2);

    obj1.name = "Danya";
    obj2.name = "Slava";

    console.log(obj1);
    console.log(obj2);

    obj2 = { name: 'Ronaldo' };

    console.log(obj2);
}

console.log(fn());