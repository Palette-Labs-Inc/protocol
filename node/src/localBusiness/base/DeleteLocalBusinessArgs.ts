import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereUniqueInput } from "./LocalBusinessWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteLocalBusinessArgs {
  @ApiProperty({
    required: true,
    type: () => LocalBusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereUniqueInput)
  @Field(() => LocalBusinessWhereUniqueInput, { nullable: false })
  where!: LocalBusinessWhereUniqueInput;
}

export { DeleteLocalBusinessArgs as DeleteLocalBusinessArgs };
