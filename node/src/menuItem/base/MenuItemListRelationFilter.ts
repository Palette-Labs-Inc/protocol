import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MenuItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereInput)
  @IsOptional()
  @Field(() => MenuItemWhereInput, {
    nullable: true,
  })
  every?: MenuItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereInput)
  @IsOptional()
  @Field(() => MenuItemWhereInput, {
    nullable: true,
  })
  some?: MenuItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereInput)
  @IsOptional()
  @Field(() => MenuItemWhereInput, {
    nullable: true,
  })
  none?: MenuItemWhereInput;
}
export { MenuItemListRelationFilter as MenuItemListRelationFilter };
