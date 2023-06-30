import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { Courier } from "../../courier/base/Courier";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { MenuItem } from "../../menuItem/base/MenuItem";

@InputType()
class ReviewCreateInput {
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
  LocalBusiness?: LocalBusinessWhereUniqueInput | null;

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
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  author!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @Field(() => ImageWhereUniqueInput)
  image!: ImageWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierWhereUniqueInput, {
    nullable: true,
  })
  Courier?: CourierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemWhereUniqueInput, {
    nullable: true,
  })
  MenuItem?: MenuItemWhereUniqueInput | null;
}

export { ReviewCreateInput as ReviewCreateInput };
