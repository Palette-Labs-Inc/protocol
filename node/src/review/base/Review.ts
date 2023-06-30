import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional, IsDate } from "class-validator";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Image } from "../../image/base/Image";
import { Courier } from "../../courier/base/Courier";
import { MenuItem } from "../../menuItem/base/MenuItem";

@ObjectType()
class Review {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => LocalBusiness,
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  LocalBusiness?: LocalBusiness | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  reviewBody!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  reviewRating!: string;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  author?: Customer;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateCreated!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateModified!: Date;

  @ApiProperty({
    required: true,
    type: () => Image,
  })
  @ValidateNested()
  @Type(() => Image)
  image?: Image;

  @ApiProperty({
    required: false,
    type: () => Courier,
  })
  @ValidateNested()
  @Type(() => Courier)
  @IsOptional()
  Courier?: Courier | null;

  @ApiProperty({
    required: false,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  MenuItem?: MenuItem | null;
}

export { Review as Review };
