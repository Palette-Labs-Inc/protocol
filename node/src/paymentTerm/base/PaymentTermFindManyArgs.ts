import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTermWhereInput } from "./PaymentTermWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentTermOrderByInput } from "./PaymentTermOrderByInput";

@ArgsType()
class PaymentTermFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentTermWhereInput, { nullable: true })
  @Type(() => PaymentTermWhereInput)
  where?: PaymentTermWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentTermOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentTermOrderByInput], { nullable: true })
  @Type(() => PaymentTermOrderByInput)
  orderBy?: Array<PaymentTermOrderByInput>;

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

export { PaymentTermFindManyArgs as PaymentTermFindManyArgs };
