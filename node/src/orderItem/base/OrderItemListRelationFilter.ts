import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrderItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrderItemWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereInput)
  @IsOptional()
  @Field(() => OrderItemWhereInput, {
    nullable: true,
  })
  every?: OrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereInput)
  @IsOptional()
  @Field(() => OrderItemWhereInput, {
    nullable: true,
  })
  some?: OrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereInput)
  @IsOptional()
  @Field(() => OrderItemWhereInput, {
    nullable: true,
  })
  none?: OrderItemWhereInput;
}
export { OrderItemListRelationFilter as OrderItemListRelationFilter };
