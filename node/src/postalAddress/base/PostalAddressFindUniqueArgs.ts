import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostalAddressWhereUniqueInput } from "./PostalAddressWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class PostalAddressFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @Field(() => PostalAddressWhereUniqueInput, { nullable: false })
  where!: PostalAddressWhereUniqueInput;
}

export { PostalAddressFindUniqueArgs as PostalAddressFindUniqueArgs };
