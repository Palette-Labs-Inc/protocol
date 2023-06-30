import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemUpdateManyWithoutNutritionInformationsInput } from "./MenuItemUpdateManyWithoutNutritionInformationsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";

@InputType()
class NutritionInformationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutNutritionInformationsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutNutritionInformationsInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutNutritionInformationsInput, {
    nullable: true,
  })
  MenuItem?: MenuItemUpdateManyWithoutNutritionInformationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  calories?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  servingSize?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fatContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fiberContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  proteinContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  saturatedFatContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unsaturatedFatContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sugarContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transFatContent?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sodiumContent?: string;
}

export { NutritionInformationUpdateInput as NutritionInformationUpdateInput };
