import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuSectionWhereUniqueInput } from "./MenuSectionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MenuSectionUpdateInput } from "./MenuSectionUpdateInput";

@ArgsType()
class UpdateMenuSectionArgs {
  @ApiProperty({
    required: true,
    type: () => MenuSectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionWhereUniqueInput)
  @Field(() => MenuSectionWhereUniqueInput, { nullable: false })
  where!: MenuSectionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MenuSectionUpdateInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionUpdateInput)
  @Field(() => MenuSectionUpdateInput, { nullable: false })
  data!: MenuSectionUpdateInput;
}

export { UpdateMenuSectionArgs as UpdateMenuSectionArgs };
