import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MenuItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @Field(() => MenuItemWhereInput, { nullable: true })
  @Type(() => MenuItemWhereInput)
  where?: MenuItemWhereInput;
}

export { MenuItemCountArgs as MenuItemCountArgs };
