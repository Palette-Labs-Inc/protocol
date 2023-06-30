import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class OrganizationFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @Field(() => OrganizationWhereUniqueInput, { nullable: false })
  where!: OrganizationWhereUniqueInput;
}

export { OrganizationFindUniqueArgs as OrganizationFindUniqueArgs };
