import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessListRelationFilter } from "../../localBusiness/base/LocalBusinessListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class OrganizationWhereInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocalBusinessListRelationFilter)
  @IsOptional()
  @Field(() => LocalBusinessListRelationFilter, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessListRelationFilter;
}

export { OrganizationWhereInput as OrganizationWhereInput };
