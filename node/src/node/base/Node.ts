import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { PostalAddress } from "../../postalAddress/base/PostalAddress";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@ObjectType()
class Node {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  hostUrl!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumNodeIndustryCode,
  })
  @IsEnum(EnumNodeIndustryCode)
  @Field(() => EnumNodeIndustryCode, {
    nullable: true,
  })
  industryCode?:
    | "DeliveryServiceProvider"
    | "Rideshare"
    | "RestaurantDeliveryService";

  @ApiProperty({
    required: true,
    type: () => PostalAddress,
  })
  @ValidateNested()
  @Type(() => PostalAddress)
  location?: PostalAddress;

  @ApiProperty({
    required: true,
    enum: EnumNodeOperatorType,
  })
  @IsEnum(EnumNodeOperatorType)
  @Field(() => EnumNodeOperatorType, {
    nullable: true,
  })
  operatorType?: "UNO" | "BSN" | "SSN" | "CSN";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Node as Node };
