import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTermWhereInput } from "./PaymentTermWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PaymentTermCountArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereInput,
  })
  @Field(() => PaymentTermWhereInput, { nullable: true })
  @Type(() => PaymentTermWhereInput)
  where?: PaymentTermWhereInput;
}

export { PaymentTermCountArgs as PaymentTermCountArgs };
