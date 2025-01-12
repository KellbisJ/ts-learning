import { User, ROLES } from './01-enum';

const current_user: User = {
  username: 'Kellbis',
  role: ROLES.ADMIN,
};

// console.log(current_user.role);

// 111

export const check_admin_role = () => {
  return current_user.role === ROLES.SELLER;
};

const log_check_admin_role = check_admin_role();

console.log('Checking admin role:', log_check_admin_role);

/// 222

export const check_role = (role1: string, role2: string) => {
  return current_user.role === role1 || current_user.role === role2;
};

const log_check_admin_role2 = check_role(ROLES.CUSTOMER, ROLES.SELLER);

console.log('check_role:', log_check_admin_role2);

// 333

export const check_role2 = (roles: string[]) => {
  return roles.includes(current_user.role) ? true : false;
};

const log_check_admin_role3 = check_role2([ROLES.CUSTOMER, ROLES.SELLER]);

console.log('check_role2:', log_check_admin_role3);

// Rest

export const check_role3 = (...roles: string[]) => {
  return roles.includes(current_user.role) ? true : false;
};

const log_check_admin_role4 = check_role3(
  ROLES.ADMIN,
  ROLES.CUSTOMER,
  ROLES.SELLER
);

console.log('check_role333:', log_check_admin_role4);
