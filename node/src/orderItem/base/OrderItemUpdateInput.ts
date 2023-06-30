import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { EnumOrderItemOrderItemStatus } from "./EnumOrderItemOrderItemStatus";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { Quote } from "../../quote/base/Quote";

@InputType()
class OrderItemUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  Order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemWhereUniqueInput, {
    nullable: true,
  })
  orderedItem?: MenuItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  orderQuantity?: number;

  @ApiProperty({
    required: false,
    enum: EnumOrderItemOrderItemStatus,
  })
  @IsEnum(EnumOrderItemOrderItemStatus)
  @IsOptional()
  @Field(() => EnumOrderItemOrderItemStatus, {
    nullable: true,
  })
  orderItemStatus?:
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
    type: () => QuoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereUniqueInput)
  @IsOptional()
  @Field(() => QuoteWhereUniqueInput, {
    nullable: true,
  })
  Quote?: QuoteWhereUniqueInput | null;
}

export { OrderItemUpdateInput as OrderItemUpdateInput };
