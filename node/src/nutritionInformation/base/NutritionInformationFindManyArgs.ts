import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionInformationWhereInput } from "./NutritionInformationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NutritionInformationOrderByInput } from "./NutritionInformationOrderByInput";

@ArgsType()
class NutritionInformationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NutritionInformationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NutritionInformationWhereInput, { nullable: true })
  @Type(() => NutritionInformationWhereInput)
  where?: NutritionInformationWhereInput;

  @ApiProperty({
    required: false,
    type: [NutritionInformationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NutritionInformationOrderByInput], { nullable: true })
  @Type(() => NutritionInformationOrderByInput)
  orderBy?: Array<NutritionInformationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NutritionInformationFindManyArgs as NutritionInformationFindManyArgs };
