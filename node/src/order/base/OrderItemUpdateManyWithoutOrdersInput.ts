import { InputType, Field } from "@nestjs/graphql";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderItemUpdateManyWithoutOrdersInput {
  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  connect?: Array<OrderItemWhereUniqueInput>;

  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  disconnect?: Array<OrderItemWhereUniqueInput>;

  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  set?: Array<OrderItemWhereUniqueInput>;
}

export { OrderItemUpdateManyWithoutOrdersInput as OrderItemUpdateManyWithoutOrdersInput };
