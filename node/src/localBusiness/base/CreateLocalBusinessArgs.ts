import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessCreateInput } from "./LocalBusinessCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateLocalBusinessArgs {
  @ApiProperty({
    required: true,
    type: () => LocalBusinessCreateInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessCreateInput)
  @Field(() => LocalBusinessCreateInput, { nullable: false })
  data!: LocalBusinessCreateInput;
}

export { CreateLocalBusinessArgs as CreateLocalBusinessArgs };
