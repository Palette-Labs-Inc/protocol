import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionCreateInput } from "./PromotionCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePromotionArgs {
  @ApiProperty({
    required: true,
    type: () => PromotionCreateInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateInput)
  @Field(() => PromotionCreateInput, { nullable: false })
  data!: PromotionCreateInput;
}

export { CreatePromotionArgs as CreatePromotionArgs };
