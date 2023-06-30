import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemOrderByInput } from "./OrderItemOrderByInput";

@ArgsType()
class OrderItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrderItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrderItemWhereInput, { nullable: true })
  @Type(() => OrderItemWhereInput)
  where?: OrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: [OrderItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrderItemOrderByInput], { nullable: true })
  @Type(() => OrderItemOrderByInput)
  orderBy?: Array<OrderItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrderItemFindManyArgs as OrderItemFindManyArgs };
