import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionInformationWhereInput } from "./NutritionInformationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NutritionInformationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NutritionInformationWhereInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereInput)
  @IsOptional()
  @Field(() => NutritionInformationWhereInput, {
    nullable: true,
  })
  every?: NutritionInformationWhereInput;

  @ApiProperty({
    required: false,
    type: () => NutritionInformationWhereInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereInput)
  @IsOptional()
  @Field(() => NutritionInformationWhereInput, {
    nullable: true,
  })
  some?: NutritionInformationWhereInput;

  @ApiProperty({
    required: false,
    type: () => NutritionInformationWhereInput,
  })
  @ValidateNested()
  @Type(() => NutritionInformationWhereInput)
  @IsOptional()
  @Field(() => NutritionInformationWhereInput, {
    nullable: true,
  })
  none?: NutritionInformationWhereInput;
}
export { NutritionInformationListRelationFilter as NutritionInformationListRelationFilter };
