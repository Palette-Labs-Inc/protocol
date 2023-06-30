import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereInput } from "./LocalBusinessWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LocalBusinessCountArgs {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereInput,
  })
  @Field(() => LocalBusinessWhereInput, { nullable: true })
  @Type(() => LocalBusinessWhereInput)
  where?: LocalBusinessWhereInput;
}

export { LocalBusinessCountArgs as LocalBusinessCountArgs };
