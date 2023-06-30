import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDeliveryWhereUniqueInput } from "./OrderDeliveryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOrderDeliveryArgs {
  @ApiProperty({
    required: true,
    type: () => OrderDeliveryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereUniqueInput)
  @Field(() => OrderDeliveryWhereUniqueInput, { nullable: false })
  where!: OrderDeliveryWhereUniqueInput;
}

export { DeleteOrderDeliveryArgs as DeleteOrderDeliveryArgs };
