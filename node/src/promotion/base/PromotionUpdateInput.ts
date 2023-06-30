import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationUpdateManyWithoutPromotionsInput } from "./OpeningHoursSpecficationUpdateManyWithoutPromotionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { OrderUpdateManyWithoutPromotionsInput } from "./OrderUpdateManyWithoutPromotionsInput";
import { Order } from "../../order/base/Order";

@InputType()
class PromotionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationUpdateManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationUpdateManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationUpdateManyWithoutPromotionsInput, {
    nullable: true,
  })
  openingHours?: OpeningHoursSpecficationUpdateManyWithoutPromotionsInput;

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
  Bazaar?: BazaarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutPromotionsInput, {
    nullable: true,
  })
  Order?: OrderUpdateManyWithoutPromotionsInput;
}

export { PromotionUpdateInput as PromotionUpdateInput };
