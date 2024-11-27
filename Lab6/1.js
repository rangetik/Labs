const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== 'function') {
            throw new Error('All compose arguments should be functions');
        }
    }
    return (x) => fns.reduce((v, f) => f(v), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

// const f3 = pipe(inc, 7, cube);
// console.log(f3);