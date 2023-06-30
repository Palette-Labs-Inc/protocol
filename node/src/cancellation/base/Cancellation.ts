import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsEnum,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Order } from "../../order/base/Order";
import { Type } from "class-transformer";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";

@ObjectType()
class Cancellation {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  orderNumber?: Order;

  @ApiProperty({
    required: true,
    enum: EnumCancellationCancelledBy,
  })
  @IsEnum(EnumCancellationCancelledBy)
  @Field(() => EnumCancellationCancelledBy, {
    nullable: true,
  })
  cancelledBy?: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isReasonRequired!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  reason!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Cancellation as Cancellation };
