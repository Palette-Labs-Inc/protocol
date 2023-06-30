import { InputType, Field } from "@nestjs/graphql";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderItemCreateNestedManyWithoutQuotesInput {
  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  connect?: Array<OrderItemWhereUniqueInput>;
}

export { OrderItemCreateNestedManyWithoutQuotesInput as OrderItemCreateNestedManyWithoutQuotesInput };
