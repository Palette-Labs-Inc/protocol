import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogoWhereInput } from "./LogoWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LogoCountArgs {
  @ApiProperty({
    required: false,
    type: () => LogoWhereInput,
  })
  @Field(() => LogoWhereInput, { nullable: true })
  @Type(() => LogoWhereInput)
  where?: LogoWhereInput;
}

export { LogoCountArgs as LogoCountArgs };
