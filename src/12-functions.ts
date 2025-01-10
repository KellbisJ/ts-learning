(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function productJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  const product1 = productJson('Softer Whearer', new Date(), 7, 'M');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.createdAt);
  console.log(product1.stock);
  console.log(product1.size);

  function productJson2(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  const product2 = productJson2('Softer Whearer', new Date(), 7);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.createdAt);
  console.log(product2.stock);
  console.log(product2.size);
})();
