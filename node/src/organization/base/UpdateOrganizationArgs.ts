import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";

@ArgsType()
class UpdateOrganizationArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @Field(() => OrganizationWhereUniqueInput, { nullable: false })
  where!: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateInput)
  @Field(() => OrganizationUpdateInput, { nullable: false })
  data!: OrganizationUpdateInput;
}

export { UpdateOrganizationArgs as UpdateOrganizationArgs };
