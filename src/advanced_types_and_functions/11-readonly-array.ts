(() => {
  const numbers: ReadonlyArray<number> = [1, 3, 5, 6, 7];
  numbers.push(1);
  numbers.pop();
  numbers.unshift(1);
  numbers.filter(() => {});
})();
