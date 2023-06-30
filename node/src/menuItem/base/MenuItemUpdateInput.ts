import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Menu } from "../../menu/base/Menu";
import { NutritionInformationWhereUniqueInput } from "../../nutritionInformation/base/NutritionInformationWhereUniqueInput";
import { EnumMenuItemItemStatus } from "./EnumMenuItemItemStatus";
import { EnumMenuItemFulfillmentMode } from "./EnumMenuItemFulfillmentMode";
import { MenuSectionWhereUniqueInput } from "../../menuSection/base/MenuSectionWhereUniqueInput";
import { MenuSection } from "../../menuSection/base/MenuSection";
import { EnumMenuItemSuitableForDiet } from "./EnumMenuItemSuitableForDiet";
import { ReviewUpdateManyWithoutMenuItemsInput } from "./ReviewUpdateManyWithoutMenuItemsInput";
import { ImageUpdateManyWithoutMenuItemsInput } from "./ImageUpdateManyWithoutMenuItemsInput";
import { OrderItemUpdateManyWithoutMenuItemsInput } from "./OrderItemUpdateManyWithoutMenuItemsInput";
import { OrderItem } from "../../orderItem/base/OrderItem";

@InputType()
class MenuItemUpdateInput {
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
  Menu?: MenuWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  priceCurrency?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maximumPurchasableCount?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumPurchasableCount?: number;

  @ApiProperty({
    required: false,
    enum: EnumMenuItemItemStatus,
  })
  @IsEnum(EnumMenuItemItemStatus)
  @IsOptional()
  @Field(() => EnumMenuItemItemStatus, {
    nullable: true,
  })
  itemStatus?:
    | "BackOrder"
    | "Discontinued"
    | "InStock"
    | "InStoreOnly"
    | "LimitedAvailability"
    | "OnlineOnly"
    | "OutOfStock"
    | "PreOrder"
    | "PreSale"
    | "SoldOut";

  @ApiProperty({
    required: false,
    enum: EnumMenuItemFulfillmentMode,
  })
  @IsEnum(EnumMenuItemFulfillmentMode)
  @IsOptional()
  @Field(() => EnumMenuItemFulfillmentMode, {
    nullable: true,
  })
  fulfillmentMode?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

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
  MenuSection?: MenuSectionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumMenuItemSuitableForDiet,
  })
  @IsEnum(EnumMenuItemSuitableForDiet)
  @IsOptional()
  @Field(() => EnumMenuItemSuitableForDiet, {
    nullable: true,
  })
  suitableForDiet?:
    | "DiabeticDiet"
    | "GlutenFreeDiet"
    | "HalalDiet"
    | "HinduDiet"
    | "KosherDiet"
    | "LowCalorieDiet"
    | "LowFatDiet"
    | "LowLactoseDiet"
    | "LowSaltDiet"
    | "VeganDiet"
    | "VegetarianDiet";

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  review?: ReviewUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  image?: ImageUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  OrderItem?: OrderItemUpdateManyWithoutMenuItemsInput;
}

export { MenuItemUpdateInput as MenuItemUpdateInput };
