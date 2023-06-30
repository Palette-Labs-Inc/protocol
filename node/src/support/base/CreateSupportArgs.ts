import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupportCreateInput } from "./SupportCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSupportArgs {
  @ApiProperty({
    required: true,
    type: () => SupportCreateInput,
  })
  @ValidateNested()
  @Type(() => SupportCreateInput)
  @Field(() => SupportCreateInput, { nullable: false })
  data!: SupportCreateInput;
}

export { CreateSupportArgs as CreateSupportArgs };
