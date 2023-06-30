import { InputType, Field } from "@nestjs/graphql";
import { SupportWhereUniqueInput } from "../../support/base/SupportWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupportUpdateManyWithoutCustomersInput {
  @Field(() => [SupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportWhereUniqueInput],
  })
  connect?: Array<SupportWhereUniqueInput>;

  @Field(() => [SupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportWhereUniqueInput],
  })
  disconnect?: Array<SupportWhereUniqueInput>;

  @Field(() => [SupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportWhereUniqueInput],
  })
  set?: Array<SupportWhereUniqueInput>;
}

export { SupportUpdateManyWithoutCustomersInput as SupportUpdateManyWithoutCustomersInput };
