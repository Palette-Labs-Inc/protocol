import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCustomerArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerCreateInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateInput)
  @Field(() => CustomerCreateInput, { nullable: false })
  data!: CustomerCreateInput;
}

export { CreateCustomerArgs as CreateCustomerArgs };
