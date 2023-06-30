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
class OrderItemCreateInput {
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
    required: true,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @Field(() => MenuItemWhereUniqueInput)
  orderedItem!: MenuItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  orderQuantity!: number;

  @ApiProperty({
    required: true,
    enum: EnumOrderItemOrderItemStatus,
  })
  @IsEnum(EnumOrderItemOrderItemStatus)
  @Field(() => EnumOrderItemOrderItemStatus)
  orderItemStatus!:
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

export { OrderItemCreateInput as OrderItemCreateInput };
