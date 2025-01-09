(() => {
  let userId: string | number;

  function greeting(myTextOrNumber: string | number) {
    if (typeof myTextOrNumber === 'string') {
      console.log(`string ${myTextOrNumber.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myTextOrNumber.toFixed(1)}`);
    }
  }
  greeting('hlSDFSDlaaaa');
  greeting(11111.49056804);
})();
