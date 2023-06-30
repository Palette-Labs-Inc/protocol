import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemUpdateManyWithoutMenusInput } from "./MenuItemUpdateManyWithoutMenusInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { EnumMenuFulfillmentModes } from "./EnumMenuFulfillmentModes";
import { MenuSectionUpdateManyWithoutMenusInput } from "./MenuSectionUpdateManyWithoutMenusInput";

@InputType()
class MenuUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutMenusInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutMenusInput, {
    nullable: true,
  })
  MenuItem?: MenuItemUpdateManyWithoutMenusInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => LocalBusinessWhereUniqueInput, {
    nullable: true,
  })
  seller?: LocalBusinessWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    enum: EnumMenuFulfillmentModes,
  })
  @IsEnum(EnumMenuFulfillmentModes)
  @IsOptional()
  @Field(() => EnumMenuFulfillmentModes, {
    nullable: true,
  })
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => MenuSectionUpdateManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionUpdateManyWithoutMenusInput)
  @IsOptional()
  @Field(() => MenuSectionUpdateManyWithoutMenusInput, {
    nullable: true,
  })
  hasMenuSection?: MenuSectionUpdateManyWithoutMenusInput;
}

export { MenuUpdateInput as MenuUpdateInput };
