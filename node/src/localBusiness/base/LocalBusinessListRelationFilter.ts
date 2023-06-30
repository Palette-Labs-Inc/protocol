import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereInput } from "./LocalBusinessWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LocalBusinessListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereInput)
  @IsOptional()
  @Field(() => LocalBusinessWhereInput, {
    nullable: true,
  })
  every?: LocalBusinessWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereInput)
  @IsOptional()
  @Field(() => LocalBusinessWhereInput, {
    nullable: true,
  })
  some?: LocalBusinessWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereInput)
  @IsOptional()
  @Field(() => LocalBusinessWhereInput, {
    nullable: true,
  })
  none?: LocalBusinessWhereInput;
}
export { LocalBusinessListRelationFilter as LocalBusinessListRelationFilter };
