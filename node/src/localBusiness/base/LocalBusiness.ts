import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  ValidateNested,
  IsNumber,
  IsInt,
  IsEnum,
  IsDate,
  IsBoolean,
  IsOptional,
} from "class-validator";

import { AggregateRating } from "../../aggregateRating/base/AggregateRating";
import { Type } from "class-transformer";
import { Logo } from "../../logo/base/Logo";
import { PostalAddress } from "../../postalAddress/base/PostalAddress";
import { EnumLocalBusinessPaymentAccepted } from "./EnumLocalBusinessPaymentAccepted";
import { Organization } from "../../organization/base/Organization";
import { EnumLocalBusinessCategory } from "./EnumLocalBusinessCategory";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { Review } from "../../review/base/Review";
import { OpeningHoursSpecfication } from "../../openingHoursSpecfication/base/OpeningHoursSpecfication";
import { Image } from "../../image/base/Image";
import { Order } from "../../order/base/Order";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Menu } from "../../menu/base/Menu";

@ObjectType()
class LocalBusiness {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  telephone!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  servesCuisine!: string;

  @ApiProperty({
    required: true,
    type: () => AggregateRating,
  })
  @ValidateNested()
  @Type(() => AggregateRating)
  aggregateRating?: AggregateRating;

  @ApiProperty({
    required: true,
    type: () => Logo,
  })
  @ValidateNested()
  @Type(() => Logo)
  logo?: Logo;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  openingHours!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  longitude!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  latitude!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  globalLocationNumber!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  faxNumber!: string;

  @ApiProperty({
    required: true,
    type: () => PostalAddress,
  })
  @ValidateNested()
  @Type(() => PostalAddress)
  address?: PostalAddress;

  @ApiProperty({
    required: true,
    enum: EnumLocalBusinessPaymentAccepted,
  })
  @IsEnum(EnumLocalBusinessPaymentAccepted)
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  priceRange!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  foundingDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hasPOS!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  pos!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  branchCode!: string;

  @ApiProperty({
    required: true,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  parentOrganization?: Organization;

  @ApiProperty({
    required: true,
    enum: EnumLocalBusinessCategory,
  })
  @IsEnum(EnumLocalBusinessCategory)
  @Field(() => EnumLocalBusinessCategory, {
    nullable: true,
  })
  category?: "Restaurant" | "Grocery" | "Flower";

  @ApiProperty({
    required: false,
    type: () => Bazaar,
  })
  @ValidateNested()
  @Type(() => Bazaar)
  @IsOptional()
  Bazaar?: Bazaar | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  commission!: string;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  review?: Array<Review>;

  @ApiProperty({
    required: false,
    type: () => [OpeningHoursSpecfication],
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecfication)
  @IsOptional()
  openingHoursSpecification?: Array<OpeningHoursSpecfication>;

  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  photo?: Array<Image>;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  Order?: Array<Order>;

  @ApiProperty({
    required: false,
    type: () => [PaymentTerm],
  })
  @ValidateNested()
  @Type(() => PaymentTerm)
  @IsOptional()
  PaymentTerm?: Array<PaymentTerm>;

  @ApiProperty({
    required: false,
    type: () => [Menu],
  })
  @ValidateNested()
  @Type(() => Menu)
  @IsOptional()
  hasMenu?: Array<Menu>;
}

export { LocalBusiness as LocalBusiness };
