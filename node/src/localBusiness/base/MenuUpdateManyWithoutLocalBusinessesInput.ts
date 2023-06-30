import { InputType, Field } from "@nestjs/graphql";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuUpdateManyWithoutLocalBusinessesInput {
  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  connect?: Array<MenuWhereUniqueInput>;

  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  disconnect?: Array<MenuWhereUniqueInput>;

  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  set?: Array<MenuWhereUniqueInput>;
}

export { MenuUpdateManyWithoutLocalBusinessesInput as MenuUpdateManyWithoutLocalBusinessesInput };
