import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsInt,
  IsEnum,
  IsDate,
  IsBoolean,
} from "class-validator";

import { AggregateRatingWhereUniqueInput } from "../../aggregateRating/base/AggregateRatingWhereUniqueInput";
import { Type } from "class-transformer";
import { LogoWhereUniqueInput } from "../../logo/base/LogoWhereUniqueInput";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { EnumLocalBusinessPaymentAccepted } from "./EnumLocalBusinessPaymentAccepted";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { EnumLocalBusinessCategory } from "./EnumLocalBusinessCategory";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { ReviewUpdateManyWithoutLocalBusinessesInput } from "./ReviewUpdateManyWithoutLocalBusinessesInput";
import { OpeningHoursSpecficationUpdateManyWithoutLocalBusinessesInput } from "./OpeningHoursSpecficationUpdateManyWithoutLocalBusinessesInput";
import { ImageUpdateManyWithoutLocalBusinessesInput } from "./ImageUpdateManyWithoutLocalBusinessesInput";
import { OrderUpdateManyWithoutLocalBusinessesInput } from "./OrderUpdateManyWithoutLocalBusinessesInput";
import { Order } from "../../order/base/Order";
import { PaymentTermUpdateManyWithoutLocalBusinessesInput } from "./PaymentTermUpdateManyWithoutLocalBusinessesInput";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { MenuUpdateManyWithoutLocalBusinessesInput } from "./MenuUpdateManyWithoutLocalBusinessesInput";

@InputType()
class LocalBusinessUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telephone?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  servesCuisine?: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  openingHours?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  longitude?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  latitude?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  globalLocationNumber?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  faxNumber?: string;

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
    enum: EnumLocalBusinessPaymentAccepted,
  })
  @IsEnum(EnumLocalBusinessPaymentAccepted)
  @IsOptional()
  @Field(() => EnumLocalBusinessPaymentAccepted, {
    nullable: true,
  })
  paymentAccepted?:
    | "CreditCard"
    | "Cash"
    | "Invoice"
    | "Paypal"
    | "GoogleCheckout"
    | "BankTransferInAdvance"
    | "CheckInAdvance"
    | "COD"
    | "DirectDebit"
    | "PaySwarm";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  priceRange?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  foundingDate?: Date;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hasPOS?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pos?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  branchCode?: string;

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
    enum: EnumLocalBusinessCategory,
  })
  @IsEnum(EnumLocalBusinessCategory)
  @IsOptional()
  @Field(() => EnumLocalBusinessCategory, {
    nullable: true,
  })
  category?: "Restaurant" | "Grocery" | "Flower";

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
  commission?: string;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  review?: ReviewUpdateManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationUpdateManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationUpdateManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationUpdateManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  openingHoursSpecification?: OpeningHoursSpecficationUpdateManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  photo?: ImageUpdateManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  Order?: OrderUpdateManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermUpdateManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermUpdateManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => PaymentTermUpdateManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  PaymentTerm?: PaymentTermUpdateManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => MenuUpdateManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => MenuUpdateManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => MenuUpdateManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  hasMenu?: MenuUpdateManyWithoutLocalBusinessesInput;
}

export { LocalBusinessUpdateInput as LocalBusinessUpdateInput };
