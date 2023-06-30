import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDeliveryWhereInput } from "./OrderDeliveryWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrderDeliveryCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrderDeliveryWhereInput,
  })
  @Field(() => OrderDeliveryWhereInput, { nullable: true })
  @Type(() => OrderDeliveryWhereInput)
  where?: OrderDeliveryWhereInput;
}

export { OrderDeliveryCountArgs as OrderDeliveryCountArgs };
