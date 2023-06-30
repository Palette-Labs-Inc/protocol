import { InputType, Field } from "@nestjs/graphql";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MessageUpdateManyWithoutOrdersInput {
  @Field(() => [MessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageWhereUniqueInput],
  })
  connect?: Array<MessageWhereUniqueInput>;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageWhereUniqueInput],
  })
  disconnect?: Array<MessageWhereUniqueInput>;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageWhereUniqueInput],
  })
  set?: Array<MessageWhereUniqueInput>;
}

export { MessageUpdateManyWithoutOrdersInput as MessageUpdateManyWithoutOrdersInput };
