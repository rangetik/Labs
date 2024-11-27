const seq = (f) => (g) => typeof g === "number" ? f(g) : seq(x => f(g(x)));

console.log(seq(x => x * 2)
    (x => x + 7)(5));
// Результат: 24

console.log(seq(x => x + 7)
    (x => x * 2)(5));
// Результат: 17

console.log(seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7));
// Результат: 3