import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
  IsEnum,
} from "class-validator";
import { Order } from "../../order/base/Order";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { EnumOrderItemOrderItemStatus } from "./EnumOrderItemOrderItemStatus";
import { Quote } from "../../quote/base/Quote";

@ObjectType()
class OrderItem {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  Order?: Order | null;

  @ApiProperty({
    required: true,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  orderedItem?: MenuItem;

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
    type: () => Quote,
  })
  @ValidateNested()
  @Type(() => Quote)
  @IsOptional()
  Quote?: Quote | null;
}

export { OrderItem as OrderItem };
