import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingListRelationFilter } from "../../aggregateRating/base/AggregateRatingListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AggregateRating } from "../../aggregateRating/base/AggregateRating";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { Review } from "../../review/base/Review";
import { PostalAddressListRelationFilter } from "../../postalAddress/base/PostalAddressListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { Order } from "../../order/base/Order";
import { PaymentTermListRelationFilter } from "../../paymentTerm/base/PaymentTermListRelationFilter";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { SupportListRelationFilter } from "../../support/base/SupportListRelationFilter";
import { Support } from "../../support/base/Support";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AggregateRatingListRelationFilter)
  @IsOptional()
  @Field(() => AggregateRatingListRelationFilter, {
    nullable: true,
  })
  AggregateRating?: AggregateRatingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  Review?: ReviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PostalAddressListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PostalAddressListRelationFilter)
  @IsOptional()
  @Field(() => PostalAddressListRelationFilter, {
    nullable: true,
  })
  address?: PostalAddressListRelationFilter;

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

  @ApiProperty({
    required: false,
    type: () => PaymentTermListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentTermListRelationFilter)
  @IsOptional()
  @Field(() => PaymentTermListRelationFilter, {
    nullable: true,
  })
  PaymentTerm?: PaymentTermListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SupportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupportListRelationFilter)
  @IsOptional()
  @Field(() => SupportListRelationFilter, {
    nullable: true,
  })
  Support?: SupportListRelationFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
