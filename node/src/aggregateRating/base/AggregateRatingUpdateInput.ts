import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessUpdateManyWithoutAggregateRatingsInput } from "./LocalBusinessUpdateManyWithoutAggregateRatingsInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsEnum,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { EnumAggregateRatingItemReviewed } from "./EnumAggregateRatingItemReviewed";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

@InputType()
class AggregateRatingUpdateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessUpdateManyWithoutAggregateRatingsInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessUpdateManyWithoutAggregateRatingsInput)
  @IsOptional()
  @Field(() => LocalBusinessUpdateManyWithoutAggregateRatingsInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessUpdateManyWithoutAggregateRatingsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  ratingCount?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  reviewCount?: number;

  @ApiProperty({
    required: false,
    enum: EnumAggregateRatingItemReviewed,
  })
  @IsEnum(EnumAggregateRatingItemReviewed)
  @IsOptional()
  @Field(() => EnumAggregateRatingItemReviewed, {
    nullable: true,
  })
  itemReviewed?: "MenuItem" | "LocalBusiness" | "Courier";

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  author?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  bestRating?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ratingExplanation?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  ratingValue?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  worstRating?: number;
}

export { AggregateRatingUpdateInput as AggregateRatingUpdateInput };
