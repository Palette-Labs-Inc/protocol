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
import { ReviewCreateNestedManyWithoutMenuItemsInput } from "./ReviewCreateNestedManyWithoutMenuItemsInput";
import { ImageCreateNestedManyWithoutMenuItemsInput } from "./ImageCreateNestedManyWithoutMenuItemsInput";
import { OrderItemCreateNestedManyWithoutMenuItemsInput } from "./OrderItemCreateNestedManyWithoutMenuItemsInput";
import { OrderItem } from "../../orderItem/base/OrderItem";

@InputType()
class MenuItemCreateInput {
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => NutritionInformationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereUniqueInput)
  @Field(() => NutritionInformationWhereUniqueInput)
  nutrition!: NutritionInformationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  priceCurrency!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  quantity!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maximumPurchasableCount!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minimumPurchasableCount!: number;

  @ApiProperty({
    required: true,
    enum: EnumMenuItemItemStatus,
  })
  @IsEnum(EnumMenuItemItemStatus)
  @Field(() => EnumMenuItemItemStatus)
  itemStatus!:
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
    required: true,
    enum: EnumMenuItemFulfillmentMode,
  })
  @IsEnum(EnumMenuItemFulfillmentMode)
  @Field(() => EnumMenuItemFulfillmentMode)
  fulfillmentMode!: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

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
    required: true,
    enum: EnumMenuItemSuitableForDiet,
  })
  @IsEnum(EnumMenuItemSuitableForDiet)
  @Field(() => EnumMenuItemSuitableForDiet)
  suitableForDiet!:
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
    type: () => ReviewCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  review?: ReviewCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  image?: ImageCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  OrderItem?: OrderItemCreateNestedManyWithoutMenuItemsInput;
}

export { MenuItemCreateInput as MenuItemCreateInput };
