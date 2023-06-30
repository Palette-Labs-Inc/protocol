import { InputType, Field } from "@nestjs/graphql";
import { AggregateRatingWhereUniqueInput } from "../../aggregateRating/base/AggregateRatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AggregateRatingUpdateManyWithoutCustomersInput {
  @Field(() => [AggregateRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AggregateRatingWhereUniqueInput],
  })
  connect?: Array<AggregateRatingWhereUniqueInput>;

  @Field(() => [AggregateRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AggregateRatingWhereUniqueInput],
  })
  disconnect?: Array<AggregateRatingWhereUniqueInput>;

  @Field(() => [AggregateRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AggregateRatingWhereUniqueInput],
  })
  set?: Array<AggregateRatingWhereUniqueInput>;
}

export { AggregateRatingUpdateManyWithoutCustomersInput as AggregateRatingUpdateManyWithoutCustomersInput };
