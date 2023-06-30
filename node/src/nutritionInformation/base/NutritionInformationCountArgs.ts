import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionInformationWhereInput } from "./NutritionInformationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class NutritionInformationCountArgs {
  @ApiProperty({
    required: false,
    type: () => NutritionInformationWhereInput,
  })
  @Field(() => NutritionInformationWhereInput, { nullable: true })
  @Type(() => NutritionInformationWhereInput)
  where?: NutritionInformationWhereInput;
}

export { NutritionInformationCountArgs as NutritionInformationCountArgs };
