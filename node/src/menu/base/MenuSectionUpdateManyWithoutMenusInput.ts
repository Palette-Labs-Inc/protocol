import { InputType, Field } from "@nestjs/graphql";
import { MenuSectionWhereUniqueInput } from "../../menuSection/base/MenuSectionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuSectionUpdateManyWithoutMenusInput {
  @Field(() => [MenuSectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuSectionWhereUniqueInput],
  })
  connect?: Array<MenuSectionWhereUniqueInput>;

  @Field(() => [MenuSectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuSectionWhereUniqueInput],
  })
  disconnect?: Array<MenuSectionWhereUniqueInput>;

  @Field(() => [MenuSectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuSectionWhereUniqueInput],
  })
  set?: Array<MenuSectionWhereUniqueInput>;
}

export { MenuSectionUpdateManyWithoutMenusInput as MenuSectionUpdateManyWithoutMenusInput };
