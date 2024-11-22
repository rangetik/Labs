// Динамічний підрахунок елементів різних типів у масиві
const array = [true, true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'example', 0, -5, true, 'code'];

const typeElement = {};

for (const element of array) {
    const type = typeof element;
    if (!(type in typeElement)) {
        typeElement[type] = 0;
    }
    typeElement[type] += 1;
}

console.log(typeElement);