import { InputType, Field } from "@nestjs/graphql";
import { OrderDeliveryWhereUniqueInput } from "../../orderDelivery/base/OrderDeliveryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderDeliveryCreateNestedManyWithoutCouriersInput {
  @Field(() => [OrderDeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderDeliveryWhereUniqueInput],
  })
  connect?: Array<OrderDeliveryWhereUniqueInput>;
}

export { OrderDeliveryCreateNestedManyWithoutCouriersInput as OrderDeliveryCreateNestedManyWithoutCouriersInput };
