export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'Kellbis',
  role: ROLES.ADMIN,
};
