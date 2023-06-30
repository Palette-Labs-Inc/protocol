import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReviewUpdateInput } from "./ReviewUpdateInput";

@ArgsType()
class UpdateReviewArgs {
  @ApiProperty({
    required: true,
    type: () => ReviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReviewWhereUniqueInput)
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  where!: ReviewWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReviewUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateInput)
  @Field(() => ReviewUpdateInput, { nullable: false })
  data!: ReviewUpdateInput;
}

export { UpdateReviewArgs as UpdateReviewArgs };
