import { InputType, Field } from "@nestjs/graphql";
import { OrderDeliveryWhereUniqueInput } from "../../orderDelivery/base/OrderDeliveryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderDeliveryUpdateManyWithoutCouriersInput {
  @Field(() => [OrderDeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderDeliveryWhereUniqueInput],
  })
  connect?: Array<OrderDeliveryWhereUniqueInput>;

  @Field(() => [OrderDeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderDeliveryWhereUniqueInput],
  })
  disconnect?: Array<OrderDeliveryWhereUniqueInput>;

  @Field(() => [OrderDeliveryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderDeliveryWhereUniqueInput],
  })
  set?: Array<OrderDeliveryWhereUniqueInput>;
}

export { OrderDeliveryUpdateManyWithoutCouriersInput as OrderDeliveryUpdateManyWithoutCouriersInput };
