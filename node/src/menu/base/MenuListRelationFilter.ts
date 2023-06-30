import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereInput } from "./MenuWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MenuListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MenuWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereInput)
  @IsOptional()
  @Field(() => MenuWhereInput, {
    nullable: true,
  })
  every?: MenuWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereInput)
  @IsOptional()
  @Field(() => MenuWhereInput, {
    nullable: true,
  })
  some?: MenuWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereInput)
  @IsOptional()
  @Field(() => MenuWhereInput, {
    nullable: true,
  })
  none?: MenuWhereInput;
}
export { MenuListRelationFilter as MenuListRelationFilter };
