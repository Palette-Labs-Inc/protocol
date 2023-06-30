import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuSectionWhereInput } from "./MenuSectionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MenuSectionCountArgs {
  @ApiProperty({
    required: false,
    type: () => MenuSectionWhereInput,
  })
  @Field(() => MenuSectionWhereInput, { nullable: true })
  @Type(() => MenuSectionWhereInput)
  where?: MenuSectionWhereInput;
}

export { MenuSectionCountArgs as MenuSectionCountArgs };
