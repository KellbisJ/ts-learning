import { BaseModelInterface } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface UserInterface extends BaseModelInterface {
  username: string;
  role: ROLES;
}
