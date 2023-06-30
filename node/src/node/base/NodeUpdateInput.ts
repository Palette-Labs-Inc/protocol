import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@InputType()
class NodeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hostUrl?: string;

  @ApiProperty({
    required: false,
    enum: EnumNodeIndustryCode,
  })
  @IsEnum(EnumNodeIndustryCode)
  @IsOptional()
  @Field(() => EnumNodeIndustryCode, {
    nullable: true,
  })
  industryCode?:
    | "DeliveryServiceProvider"
    | "Rideshare"
    | "RestaurantDeliveryService";

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
  location?: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumNodeOperatorType,
  })
  @IsEnum(EnumNodeOperatorType)
  @IsOptional()
  @Field(() => EnumNodeOperatorType, {
    nullable: true,
  })
  operatorType?: "UNO" | "BSN" | "SSN" | "CSN";
}

export { NodeUpdateInput as NodeUpdateInput };
