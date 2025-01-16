import { Dog } from './09-protected';

// function getValue(value: number | string) {
// return value
// }

// function getValue(value: unknown) {
//   return value;
// }

function getValue<T>(value: T) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1, 4, 56]).forEach;

const perrodog = new Dog('perrodog', 'kellbis');
getValue<Dog>(perrodog).greeting;
