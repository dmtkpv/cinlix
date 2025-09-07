export function required (value) {
    if (!value) return 'This field is required';
}

export function email (value) {
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
}