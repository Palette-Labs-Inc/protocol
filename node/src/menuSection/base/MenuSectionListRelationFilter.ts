import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuSectionWhereInput } from "./MenuSectionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MenuSectionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MenuSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionWhereInput)
  @IsOptional()
  @Field(() => MenuSectionWhereInput, {
    nullable: true,
  })
  every?: MenuSectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionWhereInput)
  @IsOptional()
  @Field(() => MenuSectionWhereInput, {
    nullable: true,
  })
  some?: MenuSectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuSectionWhereInput)
  @IsOptional()
  @Field(() => MenuSectionWhereInput, {
    nullable: true,
  })
  none?: MenuSectionWhereInput;
}
export { MenuSectionListRelationFilter as MenuSectionListRelationFilter };
