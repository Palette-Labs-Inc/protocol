import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomerCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereInput,
  })
  @Field(() => CustomerWhereInput, { nullable: true })
  @Type(() => CustomerWhereInput)
  where?: CustomerWhereInput;
}

export { CustomerCountArgs as CustomerCountArgs };
