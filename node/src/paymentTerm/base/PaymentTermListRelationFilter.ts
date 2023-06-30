import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTermWhereInput } from "./PaymentTermWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentTermListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereInput)
  @IsOptional()
  @Field(() => PaymentTermWhereInput, {
    nullable: true,
  })
  every?: PaymentTermWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereInput)
  @IsOptional()
  @Field(() => PaymentTermWhereInput, {
    nullable: true,
  })
  some?: PaymentTermWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereInput)
  @IsOptional()
  @Field(() => PaymentTermWhereInput, {
    nullable: true,
  })
  none?: PaymentTermWhereInput;
}
export { PaymentTermListRelationFilter as PaymentTermListRelationFilter };
