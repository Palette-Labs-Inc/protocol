import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewCreateInput } from "./ReviewCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateReviewArgs {
  @ApiProperty({
    required: true,
    type: () => ReviewCreateInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateInput)
  @Field(() => ReviewCreateInput, { nullable: false })
  data!: ReviewCreateInput;
}

export { CreateReviewArgs as CreateReviewArgs };
