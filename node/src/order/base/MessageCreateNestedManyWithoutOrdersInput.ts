import { InputType, Field } from "@nestjs/graphql";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MessageCreateNestedManyWithoutOrdersInput {
  @Field(() => [MessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageWhereUniqueInput],
  })
  connect?: Array<MessageWhereUniqueInput>;
}

export { MessageCreateNestedManyWithoutOrdersInput as MessageCreateNestedManyWithoutOrdersInput };
