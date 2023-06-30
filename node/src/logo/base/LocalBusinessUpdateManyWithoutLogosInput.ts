import { InputType, Field } from "@nestjs/graphql";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocalBusinessUpdateManyWithoutLogosInput {
  @Field(() => [LocalBusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalBusinessWhereUniqueInput],
  })
  connect?: Array<LocalBusinessWhereUniqueInput>;

  @Field(() => [LocalBusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalBusinessWhereUniqueInput],
  })
  disconnect?: Array<LocalBusinessWhereUniqueInput>;

  @Field(() => [LocalBusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalBusinessWhereUniqueInput],
  })
  set?: Array<LocalBusinessWhereUniqueInput>;
}

export { LocalBusinessUpdateManyWithoutLogosInput as LocalBusinessUpdateManyWithoutLogosInput };
