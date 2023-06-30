import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingWhereUniqueInput } from "./AggregateRatingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AggregateRatingUpdateInput } from "./AggregateRatingUpdateInput";

@ArgsType()
class UpdateAggregateRatingArgs {
  @ApiProperty({
    required: true,
    type: () => AggregateRatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereUniqueInput)
  @Field(() => AggregateRatingWhereUniqueInput, { nullable: false })
  where!: AggregateRatingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AggregateRatingUpdateInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingUpdateInput)
  @Field(() => AggregateRatingUpdateInput, { nullable: false })
  data!: AggregateRatingUpdateInput;
}

export { UpdateAggregateRatingArgs as UpdateAggregateRatingArgs };
