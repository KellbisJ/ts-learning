export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  id: number;
  username: string;
  role: ROLES;
};
