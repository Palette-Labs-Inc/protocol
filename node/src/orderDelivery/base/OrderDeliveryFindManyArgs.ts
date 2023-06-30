import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDeliveryWhereInput } from "./OrderDeliveryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrderDeliveryOrderByInput } from "./OrderDeliveryOrderByInput";

@ArgsType()
class OrderDeliveryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrderDeliveryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrderDeliveryWhereInput, { nullable: true })
  @Type(() => OrderDeliveryWhereInput)
  where?: OrderDeliveryWhereInput;

  @ApiProperty({
    required: false,
    type: [OrderDeliveryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrderDeliveryOrderByInput], { nullable: true })
  @Type(() => OrderDeliveryOrderByInput)
  orderBy?: Array<OrderDeliveryOrderByInput>;

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

export { OrderDeliveryFindManyArgs as OrderDeliveryFindManyArgs };
