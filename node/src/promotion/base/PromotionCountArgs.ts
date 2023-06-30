import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereInput } from "./PromotionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PromotionCountArgs {
  @ApiProperty({
    required: false,
    type: () => PromotionWhereInput,
  })
  @Field(() => PromotionWhereInput, { nullable: true })
  @Type(() => PromotionWhereInput)
  where?: PromotionWhereInput;
}

export { PromotionCountArgs as PromotionCountArgs };
