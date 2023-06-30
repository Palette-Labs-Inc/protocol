import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupportWhereUniqueInput } from "./SupportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteSupportArgs {
  @ApiProperty({
    required: true,
    type: () => SupportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupportWhereUniqueInput)
  @Field(() => SupportWhereUniqueInput, { nullable: false })
  where!: SupportWhereUniqueInput;
}

export { DeleteSupportArgs as DeleteSupportArgs };
