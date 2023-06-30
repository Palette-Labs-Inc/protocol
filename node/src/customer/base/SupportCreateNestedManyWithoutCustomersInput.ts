import { InputType, Field } from "@nestjs/graphql";
import { SupportWhereUniqueInput } from "../../support/base/SupportWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupportCreateNestedManyWithoutCustomersInput {
  @Field(() => [SupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportWhereUniqueInput],
  })
  connect?: Array<SupportWhereUniqueInput>;
}

export { SupportCreateNestedManyWithoutCustomersInput as SupportCreateNestedManyWithoutCustomersInput };
