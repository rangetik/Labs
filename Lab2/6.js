const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x * x * x;

const calculate = () => {
    const array = [];
    for (let i = 0; i <= 9; i++) {
        const result = average(square(i), cube(i));
        array.push(result);
    }
    return array;
}

console.log(calculate());
