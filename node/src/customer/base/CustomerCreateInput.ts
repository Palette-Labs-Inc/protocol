import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingCreateNestedManyWithoutCustomersInput } from "./AggregateRatingCreateNestedManyWithoutCustomersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { AggregateRating } from "../../aggregateRating/base/AggregateRating";
import { ReviewCreateNestedManyWithoutCustomersInput } from "./ReviewCreateNestedManyWithoutCustomersInput";
import { Review } from "../../review/base/Review";
import { PostalAddressCreateNestedManyWithoutCustomersInput } from "./PostalAddressCreateNestedManyWithoutCustomersInput";
import { EnumCustomerGender } from "./EnumCustomerGender";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { Order } from "../../order/base/Order";
import { PaymentTermCreateNestedManyWithoutCustomersInput } from "./PaymentTermCreateNestedManyWithoutCustomersInput";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { SupportCreateNestedManyWithoutCustomersInput } from "./SupportCreateNestedManyWithoutCustomersInput";
import { Support } from "../../support/base/Support";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AggregateRatingCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  AggregateRating?: AggregateRatingCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  Review?: ReviewCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => PostalAddressCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => PostalAddressCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  address?: PostalAddressCreateNestedManyWithoutCustomersInput;

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
  @Field(() => EnumCustomerGender)
  gender!: "Male" | "Female" | "Unknown";

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  Order?: OrderCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => PaymentTermCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  PaymentTerm?: PaymentTermCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => SupportCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => SupportCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => SupportCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  Support?: SupportCreateNestedManyWithoutCustomersInput;
}

export { CustomerCreateInput as CustomerCreateInput };
