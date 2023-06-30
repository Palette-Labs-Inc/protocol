import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationWhereUniqueInput } from "./CancellationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CancellationFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => CancellationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CancellationWhereUniqueInput)
  @Field(() => CancellationWhereUniqueInput, { nullable: false })
  where!: CancellationWhereUniqueInput;
}

export { CancellationFindUniqueArgs as CancellationFindUniqueArgs };
