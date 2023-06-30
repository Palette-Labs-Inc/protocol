import { InputType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentTermCreateNestedManyWithoutCustomersInput {
  @Field(() => [PaymentTermWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTermWhereUniqueInput],
  })
  connect?: Array<PaymentTermWhereUniqueInput>;
}

export { PaymentTermCreateNestedManyWithoutCustomersInput as PaymentTermCreateNestedManyWithoutCustomersInput };
