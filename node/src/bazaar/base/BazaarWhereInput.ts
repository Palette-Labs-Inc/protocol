import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessListRelationFilter } from "../../localBusiness/base/LocalBusinessListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PromotionListRelationFilter } from "../../promotion/base/PromotionListRelationFilter";
import { CourierListRelationFilter } from "../../courier/base/CourierListRelationFilter";
import { Courier } from "../../courier/base/Courier";

@InputType()
class BazaarWhereInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocalBusinessListRelationFilter)
  @IsOptional()
  @Field(() => LocalBusinessListRelationFilter, {
    nullable: true,
  })
  localBusinesses?: LocalBusinessListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PromotionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PromotionListRelationFilter)
  @IsOptional()
  @Field(() => PromotionListRelationFilter, {
    nullable: true,
  })
  promotions?: PromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CourierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourierListRelationFilter)
  @IsOptional()
  @Field(() => CourierListRelationFilter, {
    nullable: true,
  })
  Courier?: CourierListRelationFilter;
}

export { BazaarWhereInput as BazaarWhereInput };
