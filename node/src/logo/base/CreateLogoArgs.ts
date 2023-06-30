import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogoCreateInput } from "./LogoCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateLogoArgs {
  @ApiProperty({
    required: true,
    type: () => LogoCreateInput,
  })
  @ValidateNested()
  @Type(() => LogoCreateInput)
  @Field(() => LogoCreateInput, { nullable: false })
  data!: LogoCreateInput;
}

export { CreateLogoArgs as CreateLogoArgs };
