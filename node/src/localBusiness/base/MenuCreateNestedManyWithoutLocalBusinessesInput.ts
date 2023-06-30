import { InputType, Field } from "@nestjs/graphql";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuCreateNestedManyWithoutLocalBusinessesInput {
  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  connect?: Array<MenuWhereUniqueInput>;
}

export { MenuCreateNestedManyWithoutLocalBusinessesInput as MenuCreateNestedManyWithoutLocalBusinessesInput };
