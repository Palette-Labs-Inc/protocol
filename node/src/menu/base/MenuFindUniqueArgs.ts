import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class MenuFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @Field(() => MenuWhereUniqueInput, { nullable: false })
  where!: MenuWhereUniqueInput;
}

export { MenuFindUniqueArgs as MenuFindUniqueArgs };
