import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemCreateInput } from "./OrderItemCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOrderItemArgs {
  @ApiProperty({
    required: true,
    type: () => OrderItemCreateInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateInput)
  @Field(() => OrderItemCreateInput, { nullable: false })
  data!: OrderItemCreateInput;
}

export { CreateOrderItemArgs as CreateOrderItemArgs };
