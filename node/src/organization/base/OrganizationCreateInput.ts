import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessCreateNestedManyWithoutOrganizationsInput } from "./LocalBusinessCreateNestedManyWithoutOrganizationsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class OrganizationCreateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => LocalBusinessCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessCreateNestedManyWithoutOrganizationsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}

export { OrganizationCreateInput as OrganizationCreateInput };
