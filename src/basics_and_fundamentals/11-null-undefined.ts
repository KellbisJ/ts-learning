(() => {
  // let n_number: number;
  // let s_string: string;
  let n_null: null = null;
  let u_undefined: undefined = undefined;

  let n_number: number | null = null;
  n_number = 12;

  let s_string: string | undefined;
  s_string = 'asas';

  function hallo(name: string | null) {
    let hello = 'Hola ';
    name ? (hello += name) : (hello += 'nobody');
    console.log(hello);
  }
  hallo('XQCY777');
  hallo(null);

  function halloV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  halloV2('XQCY777');
  halloV2(null);
})();
