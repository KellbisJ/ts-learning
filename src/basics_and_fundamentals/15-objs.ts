(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }; // Object typing more complex

  const products: Product[] = []; // solving any in arrays that contains objects

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Satisfyer',
    createAt: new Date(),
    stock: 2,
  });
  addProduct({
    title: 'Satisfyer',
    createAt: new Date(),
    stock: 2,
    size: 'XL',
  });

  console.log(products);
})();
