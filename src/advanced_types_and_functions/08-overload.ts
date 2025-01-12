// function parseSrt(input: string | string[]): string | string[] {
//   return Array.isArray(input) ? input.join('') : input.split('');
// }

// const arrRes = parseSrt('hola');
// console.log(`string response: (hola) => ${arrRes}`);

// const strRes = parseSrt(['h', 'o', 'l', 'a']);
// console.log(`array response: (['h', 'o', 'l', 'a']) => ${strRes}`);

// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Nico');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['N','i','c','o'] =>", rtaStr);

// I didn't understand this shit.
