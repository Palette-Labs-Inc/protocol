import { InputType, Field } from "@nestjs/graphql";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentTermUpdateManyWithoutLocalBusinessesInput {
  @Field(() => [PaymentTermWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTermWhereUniqueInput],
  })
  connect?: Array<PaymentTermWhereUniqueInput>;

  @Field(() => [PaymentTermWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTermWhereUniqueInput],
  })
  disconnect?: Array<PaymentTermWhereUniqueInput>;

  @Field(() => [PaymentTermWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTermWhereUniqueInput],
  })
  set?: Array<PaymentTermWhereUniqueInput>;
}

export { PaymentTermUpdateManyWithoutLocalBusinessesInput as PaymentTermUpdateManyWithoutLocalBusinessesInput };
