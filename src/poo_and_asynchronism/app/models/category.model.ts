export enum AccessType {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export interface CategoryInterface {
  id: number;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  access?: AccessType;
}
