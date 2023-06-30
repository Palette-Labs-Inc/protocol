import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingWhereUniqueInput } from "./AggregateRatingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class AggregateRatingFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => AggregateRatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereUniqueInput)
  @Field(() => AggregateRatingWhereUniqueInput, { nullable: false })
  where!: AggregateRatingWhereUniqueInput;
}

export { AggregateRatingFindUniqueArgs as AggregateRatingFindUniqueArgs };
