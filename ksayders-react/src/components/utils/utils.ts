export function yearText(value: number) {
    return `${value}`;
}

export function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0 || !emailRegex.test(email)) {
        return;
    }

    return email;
}