import { InputType, Field } from "@nestjs/graphql";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PostalAddressCreateNestedManyWithoutCustomersInput {
  @Field(() => [PostalAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PostalAddressWhereUniqueInput],
  })
  connect?: Array<PostalAddressWhereUniqueInput>;
}

export { PostalAddressCreateNestedManyWithoutCustomersInput as PostalAddressCreateNestedManyWithoutCustomersInput };
