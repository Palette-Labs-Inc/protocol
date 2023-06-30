import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageWhereInput } from "./MessageWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MessageCountArgs {
  @ApiProperty({
    required: false,
    type: () => MessageWhereInput,
  })
  @Field(() => MessageWhereInput, { nullable: true })
  @Type(() => MessageWhereInput)
  where?: MessageWhereInput;
}

export { MessageCountArgs as MessageCountArgs };
