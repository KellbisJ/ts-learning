export const createProduct = (
  name: string,
  id: number = Math.random(),
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    name,
    id,
    isNew,
    stock,
  };
};

const p1 = createProduct('Softer', 77, false, 4);
const p2 = createProduct('OREO', 12, false, 0);
const p3 = createProduct('Minecraft Vanilla');
const p4 = createProduct('caca');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
