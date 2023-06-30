import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Image } from "../../image/base/Image";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Order } from "../../order/base/Order";
import { EnumSupportStatus } from "./EnumSupportStatus";
import { EnumSupportAction } from "./EnumSupportAction";

@ObjectType()
class Support {
  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  photo?: Array<Image>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customer?: Customer;

  @ApiProperty({
    required: true,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  orderNumber?: Order;

  @ApiProperty({
    required: true,
    enum: EnumSupportStatus,
  })
  @IsEnum(EnumSupportStatus)
  @Field(() => EnumSupportStatus, {
    nullable: true,
  })
  status?: "Submitted" | "InProgress" | "Fixed" | "Cancelled";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  detail!: string;

  @ApiProperty({
    required: true,
    enum: EnumSupportAction,
  })
  @IsEnum(EnumSupportAction)
  @Field(() => EnumSupportAction, {
    nullable: true,
  })
  action?: "Redelivery" | "Refund" | "Other";
}

export { Support as Support };
