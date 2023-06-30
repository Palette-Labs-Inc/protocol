import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingWhereUniqueInput } from "../../aggregateRating/base/AggregateRatingWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LogoWhereUniqueInput } from "../../logo/base/LogoWhereUniqueInput";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { OpeningHoursSpecficationListRelationFilter } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationListRelationFilter";
import { ImageListRelationFilter } from "../../image/base/ImageListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { Order } from "../../order/base/Order";
import { PaymentTermListRelationFilter } from "../../paymentTerm/base/PaymentTermListRelationFilter";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { MenuListRelationFilter } from "../../menu/base/MenuListRelationFilter";

@InputType()
class LocalBusinessWhereInput {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereUniqueInput)
  @IsOptional()
  @Field(() => AggregateRatingWhereUniqueInput, {
    nullable: true,
  })
  aggregateRating?: AggregateRatingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => LogoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereUniqueInput)
  @IsOptional()
  @Field(() => LogoWhereUniqueInput, {
    nullable: true,
  })
  logo?: LogoWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @IsOptional()
  @Field(() => PostalAddressWhereUniqueInput, {
    nullable: true,
  })
  address?: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  parentOrganization?: OrganizationWhereUniqueInput;

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
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  review?: ReviewListRelationFilter;

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
  openingHoursSpecification?: OpeningHoursSpecficationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ImageListRelationFilter)
  @IsOptional()
  @Field(() => ImageListRelationFilter, {
    nullable: true,
  })
  photo?: ImageListRelationFilter;

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
    type: () => MenuListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuListRelationFilter)
  @IsOptional()
  @Field(() => MenuListRelationFilter, {
    nullable: true,
  })
  hasMenu?: MenuListRelationFilter;
}

export { LocalBusinessWhereInput as LocalBusinessWhereInput };
