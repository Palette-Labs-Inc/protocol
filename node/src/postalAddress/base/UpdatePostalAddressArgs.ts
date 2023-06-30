import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostalAddressWhereUniqueInput } from "./PostalAddressWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PostalAddressUpdateInput } from "./PostalAddressUpdateInput";

@ArgsType()
class UpdatePostalAddressArgs {
  @ApiProperty({
    required: true,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @Field(() => PostalAddressWhereUniqueInput, { nullable: false })
  where!: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PostalAddressUpdateInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressUpdateInput)
  @Field(() => PostalAddressUpdateInput, { nullable: false })
  data!: PostalAddressUpdateInput;
}

export { UpdatePostalAddressArgs as UpdatePostalAddressArgs };
