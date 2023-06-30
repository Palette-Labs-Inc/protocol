import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogoWhereInput } from "./LogoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LogoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LogoWhereInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereInput)
  @IsOptional()
  @Field(() => LogoWhereInput, {
    nullable: true,
  })
  every?: LogoWhereInput;

  @ApiProperty({
    required: false,
    type: () => LogoWhereInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereInput)
  @IsOptional()
  @Field(() => LogoWhereInput, {
    nullable: true,
  })
  some?: LogoWhereInput;

  @ApiProperty({
    required: false,
    type: () => LogoWhereInput,
  })
  @ValidateNested()
  @Type(() => LogoWhereInput)
  @IsOptional()
  @Field(() => LogoWhereInput, {
    nullable: true,
  })
  none?: LogoWhereInput;
}
export { LogoListRelationFilter as LogoListRelationFilter };
