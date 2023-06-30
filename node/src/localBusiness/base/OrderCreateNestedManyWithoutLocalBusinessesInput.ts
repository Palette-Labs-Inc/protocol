import { InputType, Field } from "@nestjs/graphql";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderCreateNestedManyWithoutLocalBusinessesInput {
  @Field(() => [OrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderWhereUniqueInput],
  })
  connect?: Array<OrderWhereUniqueInput>;
}

export { OrderCreateNestedManyWithoutLocalBusinessesInput as OrderCreateNestedManyWithoutLocalBusinessesInput };
