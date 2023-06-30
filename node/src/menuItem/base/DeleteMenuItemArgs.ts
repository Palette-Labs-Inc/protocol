import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMenuItemArgs {
  @ApiProperty({
    required: true,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @Field(() => MenuItemWhereUniqueInput, { nullable: false })
  where!: MenuItemWhereUniqueInput;
}

export { DeleteMenuItemArgs as DeleteMenuItemArgs };
