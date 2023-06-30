import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOrganizationArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationCreateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationCreateInput)
  @Field(() => OrganizationCreateInput, { nullable: false })
  data!: OrganizationCreateInput;
}

export { CreateOrganizationArgs as CreateOrganizationArgs };
