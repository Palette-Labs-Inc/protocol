import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItem } from "../../orderItem/base/OrderItem";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class Quote {
  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  orderedItems?: Array<OrderItem>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currency!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  timeToLive!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  totalPrice!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Quote as Quote };
