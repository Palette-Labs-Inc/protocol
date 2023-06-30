import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewUpdateManyWithoutCouriersInput } from "./ReviewUpdateManyWithoutCouriersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { EnumCourierGender } from "./EnumCourierGender";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { OrderDeliveryUpdateManyWithoutCouriersInput } from "./OrderDeliveryUpdateManyWithoutCouriersInput";
import { OrderDelivery } from "../../orderDelivery/base/OrderDelivery";

@InputType()
class CourierUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutCouriersInput, {
    nullable: true,
  })
  review?: ReviewUpdateManyWithoutCouriersInput;

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
    enum: EnumCourierGender,
  })
  @IsEnum(EnumCourierGender)
  @IsOptional()
  @Field(() => EnumCourierGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Unknown";

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number;

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
  bazaar?: BazaarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderDeliveryUpdateManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryUpdateManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => OrderDeliveryUpdateManyWithoutCouriersInput, {
    nullable: true,
  })
  OrderDelivery?: OrderDeliveryUpdateManyWithoutCouriersInput;
}

export { CourierUpdateInput as CourierUpdateInput };
