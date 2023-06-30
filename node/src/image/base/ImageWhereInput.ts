import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Review } from "../../review/base/Review";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { SupportWhereUniqueInput } from "../../support/base/SupportWhereUniqueInput";
import { Support } from "../../support/base/Support";

@InputType()
class ImageWhereInput {
  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  Review?: ReviewListRelationFilter;

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
  LocalBusiness?: LocalBusinessWhereUniqueInput;

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
  MenuItem?: MenuItemWhereUniqueInput;

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
  Support?: SupportWhereUniqueInput;
}

export { ImageWhereInput as ImageWhereInput };
