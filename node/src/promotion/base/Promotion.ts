import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecfication } from "../../openingHoursSpecfication/base/OpeningHoursSpecfication";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { Order } from "../../order/base/Order";

@ObjectType()
class Promotion {
  @ApiProperty({
    required: false,
    type: () => [OpeningHoursSpecfication],
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecfication)
  @IsOptional()
  openingHours?: Array<OpeningHoursSpecfication>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Bazaar,
  })
  @ValidateNested()
  @Type(() => Bazaar)
  @IsOptional()
  Bazaar?: Bazaar | null;

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
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  Order?: Array<Order>;
}

export { Promotion as Promotion };
