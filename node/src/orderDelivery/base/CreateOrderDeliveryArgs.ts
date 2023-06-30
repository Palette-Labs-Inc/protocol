import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDeliveryCreateInput } from "./OrderDeliveryCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOrderDeliveryArgs {
  @ApiProperty({
    required: true,
    type: () => OrderDeliveryCreateInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryCreateInput)
  @Field(() => OrderDeliveryCreateInput, { nullable: false })
  data!: OrderDeliveryCreateInput;
}

export { CreateOrderDeliveryArgs as CreateOrderDeliveryArgs };
