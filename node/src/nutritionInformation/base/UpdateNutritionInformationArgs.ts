import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionInformationWhereUniqueInput } from "./NutritionInformationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NutritionInformationUpdateInput } from "./NutritionInformationUpdateInput";

@ArgsType()
class UpdateNutritionInformationArgs {
  @ApiProperty({
    required: true,
    type: () => NutritionInformationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereUniqueInput)
  @Field(() => NutritionInformationWhereUniqueInput, { nullable: false })
  where!: NutritionInformationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NutritionInformationUpdateInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationUpdateInput)
  @Field(() => NutritionInformationUpdateInput, { nullable: false })
  data!: NutritionInformationUpdateInput;
}

export { UpdateNutritionInformationArgs as UpdateNutritionInformationArgs };
