import { InputType, Field } from "@nestjs/graphql";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PostalAddressUpdateManyWithoutCustomersInput {
  @Field(() => [PostalAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PostalAddressWhereUniqueInput],
  })
  connect?: Array<PostalAddressWhereUniqueInput>;

  @Field(() => [PostalAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PostalAddressWhereUniqueInput],
  })
  disconnect?: Array<PostalAddressWhereUniqueInput>;

  @Field(() => [PostalAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PostalAddressWhereUniqueInput],
  })
  set?: Array<PostalAddressWhereUniqueInput>;
}

export { PostalAddressUpdateManyWithoutCustomersInput as PostalAddressUpdateManyWithoutCustomersInput };
