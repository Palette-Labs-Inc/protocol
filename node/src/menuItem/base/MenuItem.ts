import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsNumber,
  IsInt,
  IsEnum,
  IsDate,
} from "class-validator";
import { Menu } from "../../menu/base/Menu";
import { Type } from "class-transformer";
import { NutritionInformation } from "../../nutritionInformation/base/NutritionInformation";
import { EnumMenuItemItemStatus } from "./EnumMenuItemItemStatus";
import { EnumMenuItemFulfillmentMode } from "./EnumMenuItemFulfillmentMode";
import { MenuSection } from "../../menuSection/base/MenuSection";
import { EnumMenuItemSuitableForDiet } from "./EnumMenuItemSuitableForDiet";
import { Review } from "../../review/base/Review";
import { Image } from "../../image/base/Image";
import { OrderItem } from "../../orderItem/base/OrderItem";

@ObjectType()
class MenuItem {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Menu,
  })
  @ValidateNested()
  @Type(() => Menu)
  @IsOptional()
  Menu?: Menu | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => NutritionInformation,
  })
  @ValidateNested()
  @Type(() => NutritionInformation)
  nutrition?: NutritionInformation;

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
    required: true,
    enum: EnumMenuItemFulfillmentMode,
  })
  @IsEnum(EnumMenuItemFulfillmentMode)
  @Field(() => EnumMenuItemFulfillmentMode, {
    nullable: true,
  })
  fulfillmentMode?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => MenuSection,
  })
  @ValidateNested()
  @Type(() => MenuSection)
  @IsOptional()
  MenuSection?: MenuSection | null;

  @ApiProperty({
    required: true,
    enum: EnumMenuItemSuitableForDiet,
  })
  @IsEnum(EnumMenuItemSuitableForDiet)
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
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  review?: Array<Review>;

  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  image?: Array<Image>;

  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  OrderItem?: Array<OrderItem>;
}

export { MenuItem as MenuItem };
