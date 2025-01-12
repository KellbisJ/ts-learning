const noEnd = () => {
  while (true) {
    console.log('Never Stop Learning');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'boolean') {
    return 'bool';
  } else if (Array.isArray(input)) {
    return 'arr';
  }
  return fail('ERROR, TYPE: NOT_VALID_TYPE');
};

console.log(example(false));
console.log(example([1, 2, 344]));
console.log(example(12)); // ends
console.log(example('before fail, ERROR'));
