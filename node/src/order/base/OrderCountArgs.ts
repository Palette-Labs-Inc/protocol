import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereInput } from "./OrderWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrderCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrderWhereInput,
  })
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  where?: OrderWhereInput;
}

export { OrderCountArgs as OrderCountArgs };
