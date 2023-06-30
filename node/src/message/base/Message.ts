import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";

@ObjectType()
class Message {
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
  sendAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  senderId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  recipentId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  message!: string;

  @ApiProperty({
    required: true,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  relatedOrder?: Order;
}

export { Message as Message };
