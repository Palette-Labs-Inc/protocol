import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereUniqueInput } from "./LocalBusinessWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusinessUpdateInput } from "./LocalBusinessUpdateInput";

@ArgsType()
class UpdateLocalBusinessArgs {
  @ApiProperty({
    required: true,
    type: () => LocalBusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereUniqueInput)
  @Field(() => LocalBusinessWhereUniqueInput, { nullable: false })
  where!: LocalBusinessWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LocalBusinessUpdateInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessUpdateInput)
  @Field(() => LocalBusinessUpdateInput, { nullable: false })
  data!: LocalBusinessUpdateInput;
}

export { UpdateLocalBusinessArgs as UpdateLocalBusinessArgs };
