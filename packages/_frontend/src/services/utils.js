export function empty (object) {
    Object.keys(object).forEach(key => delete object[key]);
}

export function date (timestamp) {
    return new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(new Date(timestamp))
}