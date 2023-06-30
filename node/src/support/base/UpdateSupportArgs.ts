import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupportWhereUniqueInput } from "./SupportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SupportUpdateInput } from "./SupportUpdateInput";

@ArgsType()
class UpdateSupportArgs {
  @ApiProperty({
    required: true,
    type: () => SupportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupportWhereUniqueInput)
  @Field(() => SupportWhereUniqueInput, { nullable: false })
  where!: SupportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SupportUpdateInput,
  })
  @ValidateNested()
  @Type(() => SupportUpdateInput)
  @Field(() => SupportUpdateInput, { nullable: false })
  data!: SupportUpdateInput;
}

export { UpdateSupportArgs as UpdateSupportArgs };
