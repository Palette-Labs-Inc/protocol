import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAggregateRatingItemReviewed } from "./EnumAggregateRatingItemReviewed";
import { Customer } from "../../customer/base/Customer";

@ObjectType()
class AggregateRating {
  @ApiProperty({
    required: false,
    type: () => [LocalBusiness],
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  LocalBusiness?: Array<LocalBusiness>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  ratingCount!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  reviewCount!: number;

  @ApiProperty({
    required: true,
    enum: EnumAggregateRatingItemReviewed,
  })
  @IsEnum(EnumAggregateRatingItemReviewed)
  @Field(() => EnumAggregateRatingItemReviewed, {
    nullable: true,
  })
  itemReviewed?: "MenuItem" | "LocalBusiness" | "Courier";

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  author?: Customer;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  bestRating!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ratingExplanation!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  ratingValue!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  worstRating!: number;
}

export { AggregateRating as AggregateRating };
