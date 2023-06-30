import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumBazaarFulfillmentModes } from "./EnumBazaarFulfillmentModes";
import { IsEnum, ValidateNested, IsOptional } from "class-validator";
import { LocalBusinessCreateNestedManyWithoutBazaarsInput } from "./LocalBusinessCreateNestedManyWithoutBazaarsInput";
import { Type } from "class-transformer";
import { PromotionCreateNestedManyWithoutBazaarsInput } from "./PromotionCreateNestedManyWithoutBazaarsInput";
import { CourierCreateNestedManyWithoutBazaarsInput } from "./CourierCreateNestedManyWithoutBazaarsInput";
import { Courier } from "../../courier/base/Courier";

@InputType()
class BazaarCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumBazaarFulfillmentModes,
  })
  @IsEnum(EnumBazaarFulfillmentModes)
  @Field(() => EnumBazaarFulfillmentModes)
  fulfillmentModes!: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => LocalBusinessCreateNestedManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessCreateNestedManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => LocalBusinessCreateNestedManyWithoutBazaarsInput, {
    nullable: true,
  })
  localBusinesses?: LocalBusinessCreateNestedManyWithoutBazaarsInput;

  @ApiProperty({
    required: false,
    type: () => PromotionCreateNestedManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateNestedManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => PromotionCreateNestedManyWithoutBazaarsInput, {
    nullable: true,
  })
  promotions?: PromotionCreateNestedManyWithoutBazaarsInput;

  @ApiProperty({
    required: false,
    type: () => CourierCreateNestedManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => CourierCreateNestedManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => CourierCreateNestedManyWithoutBazaarsInput, {
    nullable: true,
  })
  Courier?: CourierCreateNestedManyWithoutBazaarsInput;
}

export { BazaarCreateInput as BazaarCreateInput };
