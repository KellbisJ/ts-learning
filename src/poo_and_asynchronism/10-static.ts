export class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log('MyMath.PI', MyMath.PI);
const numbers = [12, 2, 1, 112, 666, 213];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -3, -888));
