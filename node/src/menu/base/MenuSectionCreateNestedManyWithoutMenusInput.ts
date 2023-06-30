import { InputType, Field } from "@nestjs/graphql";
import { MenuSectionWhereUniqueInput } from "../../menuSection/base/MenuSectionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuSectionCreateNestedManyWithoutMenusInput {
  @Field(() => [MenuSectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuSectionWhereUniqueInput],
  })
  connect?: Array<MenuSectionWhereUniqueInput>;
}

export { MenuSectionCreateNestedManyWithoutMenusInput as MenuSectionCreateNestedManyWithoutMenusInput };
