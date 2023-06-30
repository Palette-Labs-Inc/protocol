import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemCreateNestedManyWithoutMenusInput } from "./MenuItemCreateNestedManyWithoutMenusInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { EnumMenuFulfillmentModes } from "./EnumMenuFulfillmentModes";
import { MenuSectionCreateNestedManyWithoutMenusInput } from "./MenuSectionCreateNestedManyWithoutMenusInput";

@InputType()
class MenuCreateInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutMenusInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutMenusInput, {
    nullable: true,
  })
  MenuItem?: MenuItemCreateNestedManyWithoutMenusInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => LocalBusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereUniqueInput)
  @Field(() => LocalBusinessWhereUniqueInput)
  seller!: LocalBusinessWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    enum: EnumMenuFulfillmentModes,
  })
  @IsEnum(EnumMenuFulfillmentModes)
  @Field(() => EnumMenuFulfillmentModes)
  fulfillmentModes!: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => MenuSectionCreateNestedManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionCreateNestedManyWithoutMenusInput)
  @IsOptional()
  @Field(() => MenuSectionCreateNestedManyWithoutMenusInput, {
    nullable: true,
  })
  hasMenuSection?: MenuSectionCreateNestedManyWithoutMenusInput;
}

export { MenuCreateInput as MenuCreateInput };
