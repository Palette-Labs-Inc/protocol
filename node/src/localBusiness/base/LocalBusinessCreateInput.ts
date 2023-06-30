import { InputType, Field } from "@nestjs/graphql";
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

import { AggregateRatingWhereUniqueInput } from "../../aggregateRating/base/AggregateRatingWhereUniqueInput";
import { Type } from "class-transformer";
import { LogoWhereUniqueInput } from "../../logo/base/LogoWhereUniqueInput";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { EnumLocalBusinessPaymentAccepted } from "./EnumLocalBusinessPaymentAccepted";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { EnumLocalBusinessCategory } from "./EnumLocalBusinessCategory";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { ReviewCreateNestedManyWithoutLocalBusinessesInput } from "./ReviewCreateNestedManyWithoutLocalBusinessesInput";
import { OpeningHoursSpecficationCreateNestedManyWithoutLocalBusinessesInput } from "./OpeningHoursSpecficationCreateNestedManyWithoutLocalBusinessesInput";
import { ImageCreateNestedManyWithoutLocalBusinessesInput } from "./ImageCreateNestedManyWithoutLocalBusinessesInput";
import { OrderCreateNestedManyWithoutLocalBusinessesInput } from "./OrderCreateNestedManyWithoutLocalBusinessesInput";
import { Order } from "../../order/base/Order";
import { PaymentTermCreateNestedManyWithoutLocalBusinessesInput } from "./PaymentTermCreateNestedManyWithoutLocalBusinessesInput";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { MenuCreateNestedManyWithoutLocalBusinessesInput } from "./MenuCreateNestedManyWithoutLocalBusinessesInput";

@InputType()
class LocalBusinessCreateInput {
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
    type: () => AggregateRatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereUniqueInput)
  @Field(() => AggregateRatingWhereUniqueInput)
  aggregateRating!: AggregateRatingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LogoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereUniqueInput)
  @Field(() => LogoWhereUniqueInput)
  logo!: LogoWhereUniqueInput;

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
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @Field(() => PostalAddressWhereUniqueInput)
  address!: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumLocalBusinessPaymentAccepted,
  })
  @IsEnum(EnumLocalBusinessPaymentAccepted)
  @Field(() => EnumLocalBusinessPaymentAccepted)
  paymentAccepted!:
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
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @Field(() => OrganizationWhereUniqueInput)
  parentOrganization!: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumLocalBusinessCategory,
  })
  @IsEnum(EnumLocalBusinessCategory)
  @Field(() => EnumLocalBusinessCategory)
  category!: "Restaurant" | "Grocery" | "Flower";

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
  commission!: string;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  review?: ReviewCreateNestedManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () =>
      OpeningHoursSpecficationCreateNestedManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(
    () => OpeningHoursSpecficationCreateNestedManyWithoutLocalBusinessesInput
  )
  @IsOptional()
  @Field(
    () => OpeningHoursSpecficationCreateNestedManyWithoutLocalBusinessesInput,
    {
      nullable: true,
    }
  )
  openingHoursSpecification?: OpeningHoursSpecficationCreateNestedManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  photo?: ImageCreateNestedManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  Order?: OrderCreateNestedManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermCreateNestedManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermCreateNestedManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => PaymentTermCreateNestedManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  PaymentTerm?: PaymentTermCreateNestedManyWithoutLocalBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => MenuCreateNestedManyWithoutLocalBusinessesInput,
  })
  @ValidateNested()
  @Type(() => MenuCreateNestedManyWithoutLocalBusinessesInput)
  @IsOptional()
  @Field(() => MenuCreateNestedManyWithoutLocalBusinessesInput, {
    nullable: true,
  })
  hasMenu?: MenuCreateNestedManyWithoutLocalBusinessesInput;
}

export { LocalBusinessCreateInput as LocalBusinessCreateInput };
