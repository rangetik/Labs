// const rangeOdd = (start, end) => {
//     const array = [];
//     for (let i = start; i <= end; i = i + 2) {
//         array.push(i);
//     }
//     return array;
// }

// console.log(rangeOdd(15, 30));

const rangeOdd = (start, end) => {
    const array = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}

console.log(rangeOdd(15, 30));