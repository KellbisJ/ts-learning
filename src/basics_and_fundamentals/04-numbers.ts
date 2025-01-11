(() => {
  let productPrice = 100;
  productPrice = 2;
  console.log(productPrice); // inferred

  let customerAge: number = 28;
  // customerAge = customerAge + '1' // X281X // // Type 'string is not assignable to type number
  customerAge = customerAge + 1; // 29
  console.log(customerAge);

  let productInStock: number; // When we declared a varible but is not initialized we have to declared it explicitly.
  console.log('productInStock', productInStock); // undefined

  if (productInStock > 10) {
    console.log('Is greater than 10');
  }

  let discount = parseInt('123');
  // let discount = parseInt('asd'); // NaN
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not aply');
  }

  let myHex = 0x48e;
  console.log('hex', myHex);
  let bin = 0b1010;
  console.log('bin', bin);
})();

// Don't ever use the types Number, String, Boolean, Symbol, or Object These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.
//https://stackoverflow.com/questions/15487220/typescript-primitive-types-any-difference-between-the-types-number-and-numbe
