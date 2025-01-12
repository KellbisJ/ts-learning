type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

interface UserInterface {
  name: string;
  token: number;
}

interface AdminInterface extends UserInterface {
  superPowers: boolean;
  GodEye: boolean;
}

const userData = (data: UserInterface | AdminInterface) => {
  return data;
};

const userLog = userData({
  name: 'kellbis',
  token: Math.random(),
  superPowers: true,
  GodEye: true,
});

console.log(userLog);

// const products: Product[] = [];

// products.push({
//   id: 1,
//   title: 'str',
//   createdAt: new Date(),
//   stock: 11,
// });
