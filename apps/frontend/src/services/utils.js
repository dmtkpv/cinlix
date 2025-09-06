export function empty (object) {
    Object.keys(object).forEach(key => delete object[key]);
}