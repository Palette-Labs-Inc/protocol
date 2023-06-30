import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRating } from "../../aggregateRating/base/AggregateRating";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Review } from "../../review/base/Review";
import { PostalAddress } from "../../postalAddress/base/PostalAddress";
import { EnumCustomerGender } from "./EnumCustomerGender";
import { Order } from "../../order/base/Order";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Support } from "../../support/base/Support";

@ObjectType()
class Customer {
  @ApiProperty({
    required: false,
    type: () => [AggregateRating],
  })
  @ValidateNested()
  @Type(() => AggregateRating)
  @IsOptional()
  AggregateRating?: Array<AggregateRating>;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  Review?: Array<Review>;

  @ApiProperty({
    required: false,
    type: () => [PostalAddress],
  })
  @ValidateNested()
  @Type(() => PostalAddress)
  @IsOptional()
  address?: Array<PostalAddress>;

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
  familyName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  givenName!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  birthDate!: Date;

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
  email!: string;

  @ApiProperty({
    required: true,
    enum: EnumCustomerGender,
  })
  @IsEnum(EnumCustomerGender)
  @Field(() => EnumCustomerGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Unknown";

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
    type: () => [Support],
  })
  @ValidateNested()
  @Type(() => Support)
  @IsOptional()
  Support?: Array<Support>;
}

export { Customer as Customer };
