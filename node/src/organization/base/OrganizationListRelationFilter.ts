import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrganizationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereInput)
  @IsOptional()
  @Field(() => OrganizationWhereInput, {
    nullable: true,
  })
  every?: OrganizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereInput)
  @IsOptional()
  @Field(() => OrganizationWhereInput, {
    nullable: true,
  })
  some?: OrganizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereInput)
  @IsOptional()
  @Field(() => OrganizationWhereInput, {
    nullable: true,
  })
  none?: OrganizationWhereInput;
}
export { OrganizationListRelationFilter as OrganizationListRelationFilter };
