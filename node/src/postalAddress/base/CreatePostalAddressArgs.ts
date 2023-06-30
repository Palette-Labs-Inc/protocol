import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostalAddressCreateInput } from "./PostalAddressCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePostalAddressArgs {
  @ApiProperty({
    required: true,
    type: () => PostalAddressCreateInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressCreateInput)
  @Field(() => PostalAddressCreateInput, { nullable: false })
  data!: PostalAddressCreateInput;
}

export { CreatePostalAddressArgs as CreatePostalAddressArgs };
