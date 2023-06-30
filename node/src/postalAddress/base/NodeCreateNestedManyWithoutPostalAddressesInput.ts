import { InputType, Field } from "@nestjs/graphql";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class NodeCreateNestedManyWithoutPostalAddressesInput {
  @Field(() => [NodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NodeWhereUniqueInput],
  })
  connect?: Array<NodeWhereUniqueInput>;
}

export { NodeCreateNestedManyWithoutPostalAddressesInput as NodeCreateNestedManyWithoutPostalAddressesInput };
