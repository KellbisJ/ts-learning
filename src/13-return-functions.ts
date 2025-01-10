(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total is ${rta}`);
  };
  const rta = printTotal([1, 3, 4, 5]);
  console.log(rta);
})();
