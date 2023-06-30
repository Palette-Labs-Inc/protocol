import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationListRelationFilter } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { Order } from "../../order/base/Order";

@InputType()
class PromotionWhereInput {
  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationListRelationFilter)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationListRelationFilter, {
    nullable: true,
  })
  openingHours?: OpeningHoursSpecficationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @IsOptional()
  @Field(() => BazaarWhereUniqueInput, {
    nullable: true,
  })
  Bazaar?: BazaarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  Order?: OrderListRelationFilter;
}

export { PromotionWhereInput as PromotionWhereInput };
