import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class PaymentTermFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @Field(() => PaymentTermWhereUniqueInput, { nullable: false })
  where!: PaymentTermWhereUniqueInput;
}

export { PaymentTermFindUniqueArgs as PaymentTermFindUniqueArgs };
