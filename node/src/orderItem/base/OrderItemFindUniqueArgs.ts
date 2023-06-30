import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class OrderItemFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => OrderItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereUniqueInput)
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
}

export { OrderItemFindUniqueArgs as OrderItemFindUniqueArgs };
