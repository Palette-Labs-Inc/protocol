import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingWhereInput } from "./AggregateRatingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AggregateRatingCountArgs {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingWhereInput,
  })
  @Field(() => AggregateRatingWhereInput, { nullable: true })
  @Type(() => AggregateRatingWhereInput)
  where?: AggregateRatingWhereInput;
}

export { AggregateRatingCountArgs as AggregateRatingCountArgs };
