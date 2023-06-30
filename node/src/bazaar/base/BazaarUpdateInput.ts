import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumBazaarFulfillmentModes } from "./EnumBazaarFulfillmentModes";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { LocalBusinessUpdateManyWithoutBazaarsInput } from "./LocalBusinessUpdateManyWithoutBazaarsInput";
import { Type } from "class-transformer";
import { PromotionUpdateManyWithoutBazaarsInput } from "./PromotionUpdateManyWithoutBazaarsInput";
import { CourierUpdateManyWithoutBazaarsInput } from "./CourierUpdateManyWithoutBazaarsInput";
import { Courier } from "../../courier/base/Courier";

@InputType()
class BazaarUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumBazaarFulfillmentModes,
  })
  @IsEnum(EnumBazaarFulfillmentModes)
  @IsOptional()
  @Field(() => EnumBazaarFulfillmentModes, {
    nullable: true,
  })
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => LocalBusinessUpdateManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessUpdateManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => LocalBusinessUpdateManyWithoutBazaarsInput, {
    nullable: true,
  })
  localBusinesses?: LocalBusinessUpdateManyWithoutBazaarsInput;

  @ApiProperty({
    required: false,
    type: () => PromotionUpdateManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => PromotionUpdateManyWithoutBazaarsInput, {
    nullable: true,
  })
  promotions?: PromotionUpdateManyWithoutBazaarsInput;

  @ApiProperty({
    required: false,
    type: () => CourierUpdateManyWithoutBazaarsInput,
  })
  @ValidateNested()
  @Type(() => CourierUpdateManyWithoutBazaarsInput)
  @IsOptional()
  @Field(() => CourierUpdateManyWithoutBazaarsInput, {
    nullable: true,
  })
  Courier?: CourierUpdateManyWithoutBazaarsInput;
}

export { BazaarUpdateInput as BazaarUpdateInput };
