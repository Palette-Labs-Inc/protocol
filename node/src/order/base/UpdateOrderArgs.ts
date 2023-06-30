import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderUpdateInput } from "./OrderUpdateInput";

@ArgsType()
class UpdateOrderArgs {
  @ApiProperty({
    required: true,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput, { nullable: false })
  where!: OrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrderUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateInput)
  @Field(() => OrderUpdateInput, { nullable: false })
  data!: OrderUpdateInput;
}

export { UpdateOrderArgs as UpdateOrderArgs };
