export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 1,
  };
};

let returnProducts;

const p1 = createProduct(77, false, 4);
const p2 = createProduct(12, false, 0);
const p3 = createProduct(12, true);
console.log(p1);
console.log(p2);
console.log(p3);
