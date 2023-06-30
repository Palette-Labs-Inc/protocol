import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemUpdateInput } from "./MenuItemUpdateInput";

@ArgsType()
class UpdateMenuItemArgs {
  @ApiProperty({
    required: true,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @Field(() => MenuItemWhereUniqueInput, { nullable: false })
  where!: MenuItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MenuItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateInput)
  @Field(() => MenuItemUpdateInput, { nullable: false })
  data!: MenuItemUpdateInput;
}

export { UpdateMenuItemArgs as UpdateMenuItemArgs };
