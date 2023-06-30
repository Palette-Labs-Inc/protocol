import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionInformationCreateInput } from "./NutritionInformationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateNutritionInformationArgs {
  @ApiProperty({
    required: true,
    type: () => NutritionInformationCreateInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationCreateInput)
  @Field(() => NutritionInformationCreateInput, { nullable: false })
  data!: NutritionInformationCreateInput;
}

export { CreateNutritionInformationArgs as CreateNutritionInformationArgs };
