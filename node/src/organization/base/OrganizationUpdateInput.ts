import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessUpdateManyWithoutOrganizationsInput } from "./LocalBusinessUpdateManyWithoutOrganizationsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class OrganizationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => LocalBusinessUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;
}

export { OrganizationUpdateInput as OrganizationUpdateInput };
