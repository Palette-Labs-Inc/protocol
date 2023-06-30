import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemUpdateInput } from "./OrderItemUpdateInput";

@ArgsType()
class UpdateOrderItemArgs {
  @ApiProperty({
    required: true,
    type: () => OrderItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereUniqueInput)
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrderItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateInput)
  @Field(() => OrderItemUpdateInput, { nullable: false })
  data!: OrderItemUpdateInput;
}

export { UpdateOrderItemArgs as UpdateOrderItemArgs };
