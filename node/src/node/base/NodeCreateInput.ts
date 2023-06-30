import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum, ValidateNested } from "class-validator";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@InputType()
class NodeCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  hostUrl!: string;

  @ApiProperty({
    required: true,
    enum: EnumNodeIndustryCode,
  })
  @IsEnum(EnumNodeIndustryCode)
  @Field(() => EnumNodeIndustryCode)
  industryCode!:
    | "DeliveryServiceProvider"
    | "Rideshare"
    | "RestaurantDeliveryService";

  @ApiProperty({
    required: true,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @Field(() => PostalAddressWhereUniqueInput)
  location!: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumNodeOperatorType,
  })
  @IsEnum(EnumNodeOperatorType)
  @Field(() => EnumNodeOperatorType)
  operatorType!: "UNO" | "BSN" | "SSN" | "CSN";
}

export { NodeCreateInput as NodeCreateInput };
