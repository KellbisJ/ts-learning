(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  const submitLoginData = (data: { email: string; password: number }) => {
    const submitData = {
      ...data,
    };
    login(submitData);
  };

  const loginData = {
    email: 'ramonvaldez@222.com',
    password: 111,
  };

  submitLoginData(loginData);

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
