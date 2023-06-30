import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class PromotionFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => PromotionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereUniqueInput)
  @Field(() => PromotionWhereUniqueInput, { nullable: false })
  where!: PromotionWhereUniqueInput;
}

export { PromotionFindUniqueArgs as PromotionFindUniqueArgs };
