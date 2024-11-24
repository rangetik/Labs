const introspect = (obj) => {
    const result = [];

    for (const key in obj) {
        if (typeof obj[key] == "function") {
            const count = obj[key].length;
            result.push([key, count]);
        }
    }
    return result;
}
const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

console.log(introspect(iface));
