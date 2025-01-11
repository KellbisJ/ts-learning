(() => {
  let product_title = 'Jacket';
  product_title = 'Amazing fantabulous Jacket';
  console.log('productTitle:', product_title);

  const product_description = 'Softer, Whearer, Unconceivable';
  const product_price = 130;
  const isNew: boolean = false;

  const summary = `
  title: ${product_title}
  description: ${product_description}
  price: ${product_price}
  isNew: ${isNew}
  `;

  console.log(summary);
})();
