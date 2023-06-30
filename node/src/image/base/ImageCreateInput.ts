import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewCreateNestedManyWithoutImagesInput } from "./ReviewCreateNestedManyWithoutImagesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Review } from "../../review/base/Review";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { SupportWhereUniqueInput } from "../../support/base/SupportWhereUniqueInput";
import { Support } from "../../support/base/Support";

@InputType()
class ImageCreateInput {
  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutImagesInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutImagesInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutImagesInput, {
    nullable: true,
  })
  Review?: ReviewCreateNestedManyWithoutImagesInput;

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
  url!: string;

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

  @ApiProperty({
    required: false,
    type: () => SupportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupportWhereUniqueInput)
  @IsOptional()
  @Field(() => SupportWhereUniqueInput, {
    nullable: true,
  })
  Support?: SupportWhereUniqueInput | null;
}

export { ImageCreateInput as ImageCreateInput };
