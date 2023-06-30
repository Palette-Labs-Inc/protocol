import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessCreateNestedManyWithoutAggregateRatingsInput } from "./LocalBusinessCreateNestedManyWithoutAggregateRatingsInput";
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
class AggregateRatingCreateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessCreateNestedManyWithoutAggregateRatingsInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessCreateNestedManyWithoutAggregateRatingsInput)
  @IsOptional()
  @Field(() => LocalBusinessCreateNestedManyWithoutAggregateRatingsInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessCreateNestedManyWithoutAggregateRatingsInput;

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
  @Field(() => EnumAggregateRatingItemReviewed)
  itemReviewed!: "MenuItem" | "LocalBusiness" | "Courier";

  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  author!: CustomerWhereUniqueInput;

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

export { AggregateRatingCreateInput as AggregateRatingCreateInput };
