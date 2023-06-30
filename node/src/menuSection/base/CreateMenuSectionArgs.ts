import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuSectionCreateInput } from "./MenuSectionCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMenuSectionArgs {
  @ApiProperty({
    required: true,
    type: () => MenuSectionCreateInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionCreateInput)
  @Field(() => MenuSectionCreateInput, { nullable: false })
  data!: MenuSectionCreateInput;
}

export { CreateMenuSectionArgs as CreateMenuSectionArgs };
