(() => {
  type UserID = string | number;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string' && size) {
      console.log(`string ${userId.toLocaleLowerCase()}`);
      console.log(`SIZE ${size}`);
    }
  }
  greeting('ONEE', 'S');
})();
