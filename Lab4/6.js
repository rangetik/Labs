const max = (matrix) => {
    let maxValue = -Infinity;
    for (let row of matrix) {
        for (let element of row) {
            if (element > maxValue) {
                maxValue = element;
            }
        }
    }
    return maxValue;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9