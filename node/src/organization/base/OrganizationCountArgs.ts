import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrganizationCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @Field(() => OrganizationWhereInput, { nullable: true })
  @Type(() => OrganizationWhereInput)
  where?: OrganizationWhereInput;
}

export { OrganizationCountArgs as OrganizationCountArgs };
