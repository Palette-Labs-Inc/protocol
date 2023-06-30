import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { MenuSectionListRelationFilter } from "../../menuSection/base/MenuSectionListRelationFilter";

@InputType()
class MenuWhereInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemListRelationFilter, {
    nullable: true,
  })
  MenuItem?: MenuItemListRelationFilter;

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
  seller?: LocalBusinessWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MenuSectionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuSectionListRelationFilter)
  @IsOptional()
  @Field(() => MenuSectionListRelationFilter, {
    nullable: true,
  })
  hasMenuSection?: MenuSectionListRelationFilter;
}

export { MenuWhereInput as MenuWhereInput };
