const product_prices: (number | string)[] = [1, 2, 3, 4, 4, 5, 5, 5, '234']; // conventional array

const user: [string, number] = ['kellbis', 12]; // This tuple only accepts two elements:
// - First position: string
// - Second position: number
// Adding more than two elements, or elements of different types, will throw an error.

const [username, age] = user;
console.log(username);
console.log(age);
