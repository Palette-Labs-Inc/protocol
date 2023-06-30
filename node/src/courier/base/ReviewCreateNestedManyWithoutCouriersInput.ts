import { InputType, Field } from "@nestjs/graphql";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReviewCreateNestedManyWithoutCouriersInput {
  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  connect?: Array<ReviewWhereUniqueInput>;
}

export { ReviewCreateNestedManyWithoutCouriersInput as ReviewCreateNestedManyWithoutCouriersInput };
