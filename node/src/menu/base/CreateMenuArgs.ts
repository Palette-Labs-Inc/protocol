import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuCreateInput } from "./MenuCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMenuArgs {
  @ApiProperty({
    required: true,
    type: () => MenuCreateInput,
  })
  @ValidateNested()
  @Type(() => MenuCreateInput)
  @Field(() => MenuCreateInput, { nullable: false })
  data!: MenuCreateInput;
}

export { CreateMenuArgs as CreateMenuArgs };
