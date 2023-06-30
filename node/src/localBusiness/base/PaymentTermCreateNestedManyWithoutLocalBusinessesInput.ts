import { InputType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentTermCreateNestedManyWithoutLocalBusinessesInput {
  @Field(() => [PaymentTermWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTermWhereUniqueInput],
  })
  connect?: Array<PaymentTermWhereUniqueInput>;
}

export { PaymentTermCreateNestedManyWithoutLocalBusinessesInput as PaymentTermCreateNestedManyWithoutLocalBusinessesInput };
