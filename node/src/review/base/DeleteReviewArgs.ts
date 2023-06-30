import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteReviewArgs {
  @ApiProperty({
    required: true,
    type: () => ReviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReviewWhereUniqueInput)
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  where!: ReviewWhereUniqueInput;
}

export { DeleteReviewArgs as DeleteReviewArgs };
