import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput } from "./OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { OrderCreateNestedManyWithoutPromotionsInput } from "./OrderCreateNestedManyWithoutPromotionsInput";
import { Order } from "../../order/base/Order";

@InputType()
class PromotionCreateInput {
  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput, {
    nullable: true,
  })
  openingHours?: OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutPromotionsInput, {
    nullable: true,
  })
  Order?: OrderCreateNestedManyWithoutPromotionsInput;
}

export { PromotionCreateInput as PromotionCreateInput };
