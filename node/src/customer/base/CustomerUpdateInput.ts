import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingUpdateManyWithoutCustomersInput } from "./AggregateRatingUpdateManyWithoutCustomersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { AggregateRating } from "../../aggregateRating/base/AggregateRating";
import { ReviewUpdateManyWithoutCustomersInput } from "./ReviewUpdateManyWithoutCustomersInput";
import { Review } from "../../review/base/Review";
import { PostalAddressUpdateManyWithoutCustomersInput } from "./PostalAddressUpdateManyWithoutCustomersInput";
import { EnumCustomerGender } from "./EnumCustomerGender";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { Order } from "../../order/base/Order";
import { PaymentTermUpdateManyWithoutCustomersInput } from "./PaymentTermUpdateManyWithoutCustomersInput";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { SupportUpdateManyWithoutCustomersInput } from "./SupportUpdateManyWithoutCustomersInput";
import { Support } from "../../support/base/Support";

@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AggregateRatingUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  AggregateRating?: AggregateRatingUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  Review?: ReviewUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => PostalAddressUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => PostalAddressUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  address?: PostalAddressUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  familyName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  givenName?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthDate?: Date;

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
  email?: string;

  @ApiProperty({
    required: false,
    enum: EnumCustomerGender,
  })
  @IsEnum(EnumCustomerGender)
  @IsOptional()
  @Field(() => EnumCustomerGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Unknown";

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  Order?: OrderUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => PaymentTermUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  PaymentTerm?: PaymentTermUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => SupportUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => SupportUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => SupportUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  Support?: SupportUpdateManyWithoutCustomersInput;
}

export { CustomerUpdateInput as CustomerUpdateInput };
