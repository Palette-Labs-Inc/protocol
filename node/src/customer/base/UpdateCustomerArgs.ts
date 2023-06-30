import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerUpdateInput } from "./CustomerUpdateInput";

@ArgsType()
class UpdateCustomerArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput, { nullable: false })
  where!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerUpdateInput)
  @Field(() => CustomerUpdateInput, { nullable: false })
  data!: CustomerUpdateInput;
}

export { UpdateCustomerArgs as UpdateCustomerArgs };
