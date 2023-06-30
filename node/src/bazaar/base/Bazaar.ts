import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsEnum,
  IsDate,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { EnumBazaarFulfillmentModes } from "./EnumBazaarFulfillmentModes";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Promotion } from "../../promotion/base/Promotion";
import { Courier } from "../../courier/base/Courier";

@ObjectType()
class Bazaar {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumBazaarFulfillmentModes,
  })
  @IsEnum(EnumBazaarFulfillmentModes)
  @Field(() => EnumBazaarFulfillmentModes, {
    nullable: true,
  })
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [LocalBusiness],
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  localBusinesses?: Array<LocalBusiness>;

  @ApiProperty({
    required: false,
    type: () => [Promotion],
  })
  @ValidateNested()
  @Type(() => Promotion)
  @IsOptional()
  promotions?: Array<Promotion>;

  @ApiProperty({
    required: false,
    type: () => [Courier],
  })
  @ValidateNested()
  @Type(() => Courier)
  @IsOptional()
  Courier?: Array<Courier>;
}

export { Bazaar as Bazaar };
