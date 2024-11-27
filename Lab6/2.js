const compose = (...fns) => {
    const handlers = [];

    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('All arguments to compose must be functions');
    }
    const composed = input => {
        let result = input;
        for (let i = fns.length - 1; i >= 0; i--) {
            try {
                result = fns[i](result);
            } catch (error) {
                handlers.forEach(handler => handler(error));
                return undefined;
            }
        }
        return result;
    };

    composed.on = (event, handler) => {
        if (event === 'error' && typeof handler === 'function') {
            handlers.push(handler);
        }
    };
    return composed;
};


const g1 = x => x + 1;
const g2 = x => { throw new Error('Test error'); };
const g3 = x => x * 3;

const f = compose(g3, g2, g1);

f.on('error', e => console.error('Caught error:', e.message));

console.log(f(2));
console.log(f(5));

const h = compose(g3, g1);
console.log(h(2));
