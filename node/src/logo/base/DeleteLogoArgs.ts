import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogoWhereUniqueInput } from "./LogoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteLogoArgs {
  @ApiProperty({
    required: true,
    type: () => LogoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereUniqueInput)
  @Field(() => LogoWhereUniqueInput, { nullable: false })
  where!: LogoWhereUniqueInput;
}

export { DeleteLogoArgs as DeleteLogoArgs };
