import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereInput } from "./MenuWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MenuCountArgs {
  @ApiProperty({
    required: false,
    type: () => MenuWhereInput,
  })
  @Field(() => MenuWhereInput, { nullable: true })
  @Type(() => MenuWhereInput)
  where?: MenuWhereInput;
}

export { MenuCountArgs as MenuCountArgs };
