import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemCreateNestedManyWithoutNutritionInformationsInput } from "./MenuItemCreateNestedManyWithoutNutritionInformationsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";

@InputType()
class NutritionInformationCreateInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutNutritionInformationsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutNutritionInformationsInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutNutritionInformationsInput, {
    nullable: true,
  })
  MenuItem?: MenuItemCreateNestedManyWithoutNutritionInformationsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  calories!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  servingSize!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  fatContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  fiberContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  proteinContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  saturatedFatContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  unsaturatedFatContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  sugarContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  transFatContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  sodiumContent!: string;
}

export { NutritionInformationCreateInput as NutritionInformationCreateInput };
