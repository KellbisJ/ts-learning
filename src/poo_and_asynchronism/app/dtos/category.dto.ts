import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';

import { AccessType, CategoryInterface } from '../models/category.model';

export interface InterfaceCreateCategoryDto
  extends Omit<CategoryInterface, 'id'> {}
export class CreateCategoryDto implements InterfaceCreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 40)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  createdAt!: Date;
  updatedAt!: Date;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = '';
    await validateOrReject(dto);
  } catch (err) {
    console.error(err);
  }
})();
