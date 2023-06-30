import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDeliveryWhereUniqueInput } from "./OrderDeliveryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderDeliveryUpdateInput } from "./OrderDeliveryUpdateInput";

@ArgsType()
class UpdateOrderDeliveryArgs {
  @ApiProperty({
    required: true,
    type: () => OrderDeliveryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereUniqueInput)
  @Field(() => OrderDeliveryWhereUniqueInput, { nullable: false })
  where!: OrderDeliveryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrderDeliveryUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryUpdateInput)
  @Field(() => OrderDeliveryUpdateInput, { nullable: false })
  data!: OrderDeliveryUpdateInput;
}

export { UpdateOrderDeliveryArgs as UpdateOrderDeliveryArgs };
