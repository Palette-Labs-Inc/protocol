import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDeliveryWhereInput } from "./OrderDeliveryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrderDeliveryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrderDeliveryWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereInput)
  @IsOptional()
  @Field(() => OrderDeliveryWhereInput, {
    nullable: true,
  })
  every?: OrderDeliveryWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderDeliveryWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereInput)
  @IsOptional()
  @Field(() => OrderDeliveryWhereInput, {
    nullable: true,
  })
  some?: OrderDeliveryWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderDeliveryWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereInput)
  @IsOptional()
  @Field(() => OrderDeliveryWhereInput, {
    nullable: true,
  })
  none?: OrderDeliveryWhereInput;
}
export { OrderDeliveryListRelationFilter as OrderDeliveryListRelationFilter };
