import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuSectionWhereUniqueInput } from "./MenuSectionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class MenuSectionFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => MenuSectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionWhereUniqueInput)
  @Field(() => MenuSectionWhereUniqueInput, { nullable: false })
  where!: MenuSectionWhereUniqueInput;
}

export { MenuSectionFindUniqueArgs as MenuSectionFindUniqueArgs };
