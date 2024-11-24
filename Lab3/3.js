const ipConverter = (ip = '10.0.0.1') => {
    const parts = ip.split('.');
    let result = 0;

    for (let part of parts) {
        result = (result << 8);
        result += parseInt(part);
    }

    return result;
};

console.log(ipConverter());