import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogoWhereUniqueInput } from "./LogoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LogoUpdateInput } from "./LogoUpdateInput";

@ArgsType()
class UpdateLogoArgs {
  @ApiProperty({
    required: true,
    type: () => LogoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereUniqueInput)
  @Field(() => LogoWhereUniqueInput, { nullable: false })
  where!: LogoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LogoUpdateInput,
  })
  @ValidateNested()
  @Type(() => LogoUpdateInput)
  @Field(() => LogoUpdateInput, { nullable: false })
  data!: LogoUpdateInput;
}

export { UpdateLogoArgs as UpdateLogoArgs };
