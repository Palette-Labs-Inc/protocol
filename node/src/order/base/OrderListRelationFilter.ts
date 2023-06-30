import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereInput } from "./OrderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrderWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereInput)
  @IsOptional()
  @Field(() => OrderWhereInput, {
    nullable: true,
  })
  every?: OrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereInput)
  @IsOptional()
  @Field(() => OrderWhereInput, {
    nullable: true,
  })
  some?: OrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereInput)
  @IsOptional()
  @Field(() => OrderWhereInput, {
    nullable: true,
  })
  none?: OrderWhereInput;
}
export { OrderListRelationFilter as OrderListRelationFilter };
