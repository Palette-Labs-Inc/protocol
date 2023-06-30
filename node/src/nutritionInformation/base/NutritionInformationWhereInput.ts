import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";

@InputType()
class NutritionInformationWhereInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemListRelationFilter, {
    nullable: true,
  })
  MenuItem?: MenuItemListRelationFilter;
}

export { NutritionInformationWhereInput as NutritionInformationWhereInput };
