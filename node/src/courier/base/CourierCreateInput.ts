import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewCreateNestedManyWithoutCouriersInput } from "./ReviewCreateNestedManyWithoutCouriersInput";
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
import { OrderDeliveryCreateNestedManyWithoutCouriersInput } from "./OrderDeliveryCreateNestedManyWithoutCouriersInput";
import { OrderDelivery } from "../../orderDelivery/base/OrderDelivery";

@InputType()
class CourierCreateInput {
  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  review?: ReviewCreateNestedManyWithoutCouriersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  givenName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  familyName!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  birthDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  telephone!: string;

  @ApiProperty({
    required: true,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @Field(() => PostalAddressWhereUniqueInput)
  address!: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    enum: EnumCourierGender,
  })
  @IsEnum(EnumCourierGender)
  @Field(() => EnumCourierGender)
  gender!: "Male" | "Female" | "Unknown";

  @ApiProperty({
    required: true,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @Field(() => VehicleWhereUniqueInput)
  vehicle!: VehicleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  rating!: number;

  @ApiProperty({
    required: true,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @Field(() => BazaarWhereUniqueInput)
  bazaar!: BazaarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderDeliveryCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => OrderDeliveryCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  OrderDelivery?: OrderDeliveryCreateNestedManyWithoutCouriersInput;
}

export { CourierCreateInput as CourierCreateInput };
