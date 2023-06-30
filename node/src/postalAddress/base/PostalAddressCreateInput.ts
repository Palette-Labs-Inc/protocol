import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessCreateNestedManyWithoutPostalAddressesInput } from "./LocalBusinessCreateNestedManyWithoutPostalAddressesInput";
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
import { CourierCreateNestedManyWithoutPostalAddressesInput } from "./CourierCreateNestedManyWithoutPostalAddressesInput";
import { Courier } from "../../courier/base/Courier";
import { OrderCreateNestedManyWithoutPostalAddressesInput } from "./OrderCreateNestedManyWithoutPostalAddressesInput";
import { Order } from "../../order/base/Order";
import { NodeCreateNestedManyWithoutPostalAddressesInput } from "./NodeCreateNestedManyWithoutPostalAddressesInput";
import { Node } from "../../node/base/Node";

@InputType()
class PostalAddressCreateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessCreateNestedManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessCreateNestedManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => LocalBusinessCreateNestedManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessCreateNestedManyWithoutPostalAddressesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  addressCountry!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  addressLocality!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  addressRegion!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  postOfficeBoxNumber!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  postalCode!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  streetAddress!: string;

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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  defaultAddress!: boolean;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  globalLocationNumber!: number;

  @ApiProperty({
    required: false,
    type: () => CourierCreateNestedManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => CourierCreateNestedManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => CourierCreateNestedManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  Courier?: CourierCreateNestedManyWithoutPostalAddressesInput;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  Order?: OrderCreateNestedManyWithoutPostalAddressesInput;

  @ApiProperty({
    required: false,
    type: () => NodeCreateNestedManyWithoutPostalAddressesInput,
  })
  @ValidateNested()
  @Type(() => NodeCreateNestedManyWithoutPostalAddressesInput)
  @IsOptional()
  @Field(() => NodeCreateNestedManyWithoutPostalAddressesInput, {
    nullable: true,
  })
  Node?: NodeCreateNestedManyWithoutPostalAddressesInput;
}

export { PostalAddressCreateInput as PostalAddressCreateInput };
