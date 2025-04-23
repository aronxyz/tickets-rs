export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)