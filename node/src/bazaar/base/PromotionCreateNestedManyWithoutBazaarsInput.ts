import { InputType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PromotionCreateNestedManyWithoutBazaarsInput {
  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  connect?: Array<PromotionWhereUniqueInput>;
}

export { PromotionCreateNestedManyWithoutBazaarsInput as PromotionCreateNestedManyWithoutBazaarsInput };
