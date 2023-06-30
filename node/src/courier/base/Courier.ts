import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Review } from "../../review/base/Review";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { PostalAddress } from "../../postalAddress/base/PostalAddress";
import { EnumCourierGender } from "./EnumCourierGender";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { OrderDelivery } from "../../orderDelivery/base/OrderDelivery";

@ObjectType()
class Courier {
  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  review?: Array<Review>;

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
    type: () => PostalAddress,
  })
  @ValidateNested()
  @Type(() => PostalAddress)
  address?: PostalAddress;

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
  @Field(() => EnumCourierGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Unknown";

  @ApiProperty({
    required: true,
    type: () => Vehicle,
  })
  @ValidateNested()
  @Type(() => Vehicle)
  vehicle?: Vehicle;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  rating!: number;

  @ApiProperty({
    required: true,
    type: () => Bazaar,
  })
  @ValidateNested()
  @Type(() => Bazaar)
  bazaar?: Bazaar;

  @ApiProperty({
    required: false,
    type: () => [OrderDelivery],
  })
  @ValidateNested()
  @Type(() => OrderDelivery)
  @IsOptional()
  OrderDelivery?: Array<OrderDelivery>;
}

export { Courier as Courier };
