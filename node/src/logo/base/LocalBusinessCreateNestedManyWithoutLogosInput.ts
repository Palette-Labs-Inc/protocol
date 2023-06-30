import { InputType, Field } from "@nestjs/graphql";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocalBusinessCreateNestedManyWithoutLogosInput {
  @Field(() => [LocalBusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalBusinessWhereUniqueInput],
  })
  connect?: Array<LocalBusinessWhereUniqueInput>;
}

export { LocalBusinessCreateNestedManyWithoutLogosInput as LocalBusinessCreateNestedManyWithoutLogosInput };
