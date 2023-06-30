import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationWhereUniqueInput } from "./CancellationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CancellationUpdateInput } from "./CancellationUpdateInput";

@ArgsType()
class UpdateCancellationArgs {
  @ApiProperty({
    required: true,
    type: () => CancellationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CancellationWhereUniqueInput)
  @Field(() => CancellationWhereUniqueInput, { nullable: false })
  where!: CancellationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CancellationUpdateInput,
  })
  @ValidateNested()
  @Type(() => CancellationUpdateInput)
  @Field(() => CancellationUpdateInput, { nullable: false })
  data!: CancellationUpdateInput;
}

export { UpdateCancellationArgs as UpdateCancellationArgs };
