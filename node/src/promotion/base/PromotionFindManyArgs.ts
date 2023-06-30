import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereInput } from "./PromotionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PromotionOrderByInput } from "./PromotionOrderByInput";

@ArgsType()
class PromotionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PromotionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PromotionWhereInput, { nullable: true })
  @Type(() => PromotionWhereInput)
  where?: PromotionWhereInput;

  @ApiProperty({
    required: false,
    type: [PromotionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PromotionOrderByInput], { nullable: true })
  @Type(() => PromotionOrderByInput)
  orderBy?: Array<PromotionOrderByInput>;

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

export { PromotionFindManyArgs as PromotionFindManyArgs };
