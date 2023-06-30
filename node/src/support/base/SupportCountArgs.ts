import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupportWhereInput } from "./SupportWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SupportCountArgs {
  @ApiProperty({
    required: false,
    type: () => SupportWhereInput,
  })
  @Field(() => SupportWhereInput, { nullable: true })
  @Type(() => SupportWhereInput)
  where?: SupportWhereInput;
}

export { SupportCountArgs as SupportCountArgs };
