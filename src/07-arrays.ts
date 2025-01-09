(() => {
  const prices = [1, 2, 3, 4, 5, 67, 24, 56, 89, 'hola', true]; // inflicted
  // const prices: number[] = [1, 2, 3, 4, 5, 67, 24, 56, 89] // explicit

  const products: (number | string | boolean | Object)[] = [
    "hello it's me.",
    true,
  ];

  products.push(1, 2, {}, []);

  const numbers: number[] = [1, 2, 3, 4, 5, 67, 24, 56, 89];
  const text: string[] = ['aa'];

  numbers.map((item) => item * 2);
  // text.map((item) => item * 2); // no
})();
