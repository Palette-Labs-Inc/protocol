import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionInformationWhereUniqueInput } from "./NutritionInformationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteNutritionInformationArgs {
  @ApiProperty({
    required: true,
    type: () => NutritionInformationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereUniqueInput)
  @Field(() => NutritionInformationWhereUniqueInput, { nullable: false })
  where!: NutritionInformationWhereUniqueInput;
}

export { DeleteNutritionInformationArgs as DeleteNutritionInformationArgs };
