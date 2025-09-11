export function keyBy (arr, key) {
    return arr.reduce((acc, item) => {
        acc[item[key]] = item;
        return acc;
    }, {});
}

export function promise (object) {
    const keys = Object.keys(object);
    const values = Object.values(object);
    return Promise.all(values).then(data => {
        return data.reduce((acc, item, index) => {
            acc[keys[index]] = item;
            return acc;
        }, {})
    });

}