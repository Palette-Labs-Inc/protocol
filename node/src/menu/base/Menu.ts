import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItem } from "../../menuItem/base/MenuItem";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { EnumMenuFulfillmentModes } from "./EnumMenuFulfillmentModes";
import { MenuSection } from "../../menuSection/base/MenuSection";

@ObjectType()
class Menu {
  @ApiProperty({
    required: false,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  MenuItem?: Array<MenuItem>;

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
  name!: string;

  @ApiProperty({
    required: true,
    type: () => LocalBusiness,
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  seller?: LocalBusiness;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

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
    required: true,
    enum: EnumMenuFulfillmentModes,
  })
  @IsEnum(EnumMenuFulfillmentModes)
  @Field(() => EnumMenuFulfillmentModes, {
    nullable: true,
  })
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => [MenuSection],
  })
  @ValidateNested()
  @Type(() => MenuSection)
  @IsOptional()
  hasMenuSection?: Array<MenuSection>;
}

export { Menu as Menu };
