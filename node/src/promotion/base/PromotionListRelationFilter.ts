import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereInput } from "./PromotionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PromotionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PromotionWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereInput)
  @IsOptional()
  @Field(() => PromotionWhereInput, {
    nullable: true,
  })
  every?: PromotionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromotionWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereInput)
  @IsOptional()
  @Field(() => PromotionWhereInput, {
    nullable: true,
  })
  some?: PromotionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromotionWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereInput)
  @IsOptional()
  @Field(() => PromotionWhereInput, {
    nullable: true,
  })
  none?: PromotionWhereInput;
}
export { PromotionListRelationFilter as PromotionListRelationFilter };
