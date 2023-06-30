import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MenuUpdateInput } from "./MenuUpdateInput";

@ArgsType()
class UpdateMenuArgs {
  @ApiProperty({
    required: true,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @Field(() => MenuWhereUniqueInput, { nullable: false })
  where!: MenuWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MenuUpdateInput,
  })
  @ValidateNested()
  @Type(() => MenuUpdateInput)
  @Field(() => MenuUpdateInput, { nullable: false })
  data!: MenuUpdateInput;
}

export { UpdateMenuArgs as UpdateMenuArgs };
