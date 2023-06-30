import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrderItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrderItemWhereInput,
  })
  @Field(() => OrderItemWhereInput, { nullable: true })
  @Type(() => OrderItemWhereInput)
  where?: OrderItemWhereInput;
}

export { OrderItemCountArgs as OrderItemCountArgs };
