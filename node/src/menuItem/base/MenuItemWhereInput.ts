import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Menu } from "../../menu/base/Menu";
import { NutritionInformationWhereUniqueInput } from "../../nutritionInformation/base/NutritionInformationWhereUniqueInput";
import { MenuSectionWhereUniqueInput } from "../../menuSection/base/MenuSectionWhereUniqueInput";
import { MenuSection } from "../../menuSection/base/MenuSection";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { ImageListRelationFilter } from "../../image/base/ImageListRelationFilter";
import { OrderItemListRelationFilter } from "../../orderItem/base/OrderItemListRelationFilter";
import { OrderItem } from "../../orderItem/base/OrderItem";

@InputType()
class MenuItemWhereInput {
  @ApiProperty({
    required: false,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuWhereUniqueInput, {
    nullable: true,
  })
  Menu?: MenuWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => NutritionInformationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereUniqueInput)
  @IsOptional()
  @Field(() => NutritionInformationWhereUniqueInput, {
    nullable: true,
  })
  nutrition?: NutritionInformationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MenuSectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuSectionWhereUniqueInput, {
    nullable: true,
  })
  MenuSection?: MenuSectionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  review?: ReviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ImageListRelationFilter)
  @IsOptional()
  @Field(() => ImageListRelationFilter, {
    nullable: true,
  })
  image?: ImageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderItemListRelationFilter)
  @IsOptional()
  @Field(() => OrderItemListRelationFilter, {
    nullable: true,
  })
  OrderItem?: OrderItemListRelationFilter;
}

export { MenuItemWhereInput as MenuItemWhereInput };
