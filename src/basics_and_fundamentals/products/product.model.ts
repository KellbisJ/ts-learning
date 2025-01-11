export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
};
