import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Courier } from "../../courier/base/Courier";
import { Order } from "../../order/base/Order";
import { Node } from "../../node/base/Node";

@ObjectType()
class PostalAddress {
  @ApiProperty({
    required: false,
    type: () => [LocalBusiness],
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  LocalBusiness?: Array<LocalBusiness>;

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
  addressCountry!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  addressLocality!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  addressRegion!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  postOfficeBoxNumber!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  postalCode!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  streetAddress!: string;

  @ApiProperty({
    required: false,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  Customer?: Customer | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  defaultAddress!: boolean;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  globalLocationNumber!: number;

  @ApiProperty({
    required: false,
    type: () => [Courier],
  })
  @ValidateNested()
  @Type(() => Courier)
  @IsOptional()
  Courier?: Array<Courier>;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  Order?: Array<Order>;

  @ApiProperty({
    required: false,
    type: () => [Node],
  })
  @ValidateNested()
  @Type(() => Node)
  @IsOptional()
  Node?: Array<Node>;
}

export { PostalAddress as PostalAddress };
