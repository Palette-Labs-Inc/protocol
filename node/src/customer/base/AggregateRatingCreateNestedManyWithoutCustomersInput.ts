import { InputType, Field } from "@nestjs/graphql";
import { AggregateRatingWhereUniqueInput } from "../../aggregateRating/base/AggregateRatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AggregateRatingCreateNestedManyWithoutCustomersInput {
  @Field(() => [AggregateRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AggregateRatingWhereUniqueInput],
  })
  connect?: Array<AggregateRatingWhereUniqueInput>;
}

export { AggregateRatingCreateNestedManyWithoutCustomersInput as AggregateRatingCreateNestedManyWithoutCustomersInput };
