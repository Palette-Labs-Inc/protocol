import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTermCreateInput } from "./PaymentTermCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePaymentTermArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTermCreateInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermCreateInput)
  @Field(() => PaymentTermCreateInput, { nullable: false })
  data!: PaymentTermCreateInput;
}

export { CreatePaymentTermArgs as CreatePaymentTermArgs };
