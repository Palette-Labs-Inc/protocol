import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationCreateInput } from "./CancellationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCancellationArgs {
  @ApiProperty({
    required: true,
    type: () => CancellationCreateInput,
  })
  @ValidateNested()
  @Type(() => CancellationCreateInput)
  @Field(() => CancellationCreateInput, { nullable: false })
  data!: CancellationCreateInput;
}

export { CreateCancellationArgs as CreateCancellationArgs };
