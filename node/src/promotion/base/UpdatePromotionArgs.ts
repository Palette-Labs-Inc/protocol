import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PromotionUpdateInput } from "./PromotionUpdateInput";

@ArgsType()
class UpdatePromotionArgs {
  @ApiProperty({
    required: true,
    type: () => PromotionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereUniqueInput)
  @Field(() => PromotionWhereUniqueInput, { nullable: false })
  where!: PromotionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PromotionUpdateInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateInput)
  @Field(() => PromotionUpdateInput, { nullable: false })
  data!: PromotionUpdateInput;
}

export { UpdatePromotionArgs as UpdatePromotionArgs };
