import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessUpdateManyWithoutPostalAddressesInput } from "./LocalBusinessUpdateManyWithoutPostalAddressesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Customer } from "../../customer/base/Customer";
import { CourierUpdateManyWithoutPostalAddressesInput } from "./CourierUpdateManyWithoutPostalAddressesInput";
import { Courier } from "../../courier/base/Courier";
import { OrderUpdateManyWithoutPostalAddressesInput } from "./OrderUpdateManyWithoutPostalAddressesInput";
import { Order } from "../../order/base/Order";
import { NodeUpdateManyWithoutPostalAddressesInput } from "./NodeUpdateManyWithoutPostalAddressesInput";
import { Node } from "../../node/base/Node";

@InputType()
class PostalAddressUpdateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessUpdateManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessUpdateManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => LocalBusinessUpdateManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessUpdateManyWithoutPostalAddressesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressCountry?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLocality?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressRegion?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  postOfficeBoxNumber?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  postalCode?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  streetAddress?: string;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  Customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  defaultAddress?: boolean;

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
    type: () => CourierUpdateManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => CourierUpdateManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => CourierUpdateManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  Courier?: CourierUpdateManyWithoutPostalAddressesInput;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  Order?: OrderUpdateManyWithoutPostalAddressesInput;

  @ApiProperty({
    required: false,
    type: () => NodeUpdateManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => NodeUpdateManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => NodeUpdateManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  Node?: NodeUpdateManyWithoutPostalAddressesInput;
}

export { PostalAddressUpdateInput as PostalAddressUpdateInput };
