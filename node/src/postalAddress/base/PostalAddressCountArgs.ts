import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostalAddressWhereInput } from "./PostalAddressWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PostalAddressCountArgs {
  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereInput,
  })
  @Field(() => PostalAddressWhereInput, { nullable: true })
  @Type(() => PostalAddressWhereInput)
  where?: PostalAddressWhereInput;
}

export { PostalAddressCountArgs as PostalAddressCountArgs };
