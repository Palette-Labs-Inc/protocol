import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupportWhereInput } from "./SupportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SupportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SupportWhereInput,
  })
  @ValidateNested()
  @Type(() => SupportWhereInput)
  @IsOptional()
  @Field(() => SupportWhereInput, {
    nullable: true,
  })
  every?: SupportWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupportWhereInput,
  })
  @ValidateNested()
  @Type(() => SupportWhereInput)
  @IsOptional()
  @Field(() => SupportWhereInput, {
    nullable: true,
  })
  some?: SupportWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupportWhereInput,
  })
  @ValidateNested()
  @Type(() => SupportWhereInput)
  @IsOptional()
  @Field(() => SupportWhereInput, {
    nullable: true,
  })
  none?: SupportWhereInput;
}
export { SupportListRelationFilter as SupportListRelationFilter };
