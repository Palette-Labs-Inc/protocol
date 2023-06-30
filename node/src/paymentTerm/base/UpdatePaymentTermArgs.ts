import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentTermUpdateInput } from "./PaymentTermUpdateInput";

@ArgsType()
class UpdatePaymentTermArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @Field(() => PaymentTermWhereUniqueInput, { nullable: false })
  where!: PaymentTermWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentTermUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermUpdateInput)
  @Field(() => PaymentTermUpdateInput, { nullable: false })
  data!: PaymentTermUpdateInput;
}

export { UpdatePaymentTermArgs as UpdatePaymentTermArgs };
