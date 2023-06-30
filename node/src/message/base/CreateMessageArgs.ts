import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageCreateInput } from "./MessageCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMessageArgs {
  @ApiProperty({
    required: true,
    type: () => MessageCreateInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateInput)
  @Field(() => MessageCreateInput, { nullable: false })
  data!: MessageCreateInput;
}

export { CreateMessageArgs as CreateMessageArgs };
