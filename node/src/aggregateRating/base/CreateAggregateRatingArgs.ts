import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingCreateInput } from "./AggregateRatingCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAggregateRatingArgs {
  @ApiProperty({
    required: true,
    type: () => AggregateRatingCreateInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingCreateInput)
  @Field(() => AggregateRatingCreateInput, { nullable: false })
  data!: AggregateRatingCreateInput;
}

export { CreateAggregateRatingArgs as CreateAggregateRatingArgs };
