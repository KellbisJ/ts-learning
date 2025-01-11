(() => {
  let variable: any;
  variable = 100;
  variable = [];
  variable = 'hola';
  variable = {};

  variable = 'jghsdjghdg';
  const res = (variable as string).toLocaleLowerCase();
  console.log(res);

  variable = 1231231213;
  const res2 = (<number>variable).toFixed();
  console.log(res2);
})();
