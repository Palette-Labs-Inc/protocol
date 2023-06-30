import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { Menu } from "../../menu/base/Menu";

@InputType()
class MenuSectionWhereInput {
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
  hasMenuItem?: MenuItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuWhereUniqueInput, {
    nullable: true,
  })
  Menu?: MenuWhereUniqueInput;
}

export { MenuSectionWhereInput as MenuSectionWhereInput };
