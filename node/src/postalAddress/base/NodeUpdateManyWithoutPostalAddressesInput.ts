import { InputType, Field } from "@nestjs/graphql";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class NodeUpdateManyWithoutPostalAddressesInput {
  @Field(() => [NodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NodeWhereUniqueInput],
  })
  connect?: Array<NodeWhereUniqueInput>;

  @Field(() => [NodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NodeWhereUniqueInput],
  })
  disconnect?: Array<NodeWhereUniqueInput>;

  @Field(() => [NodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NodeWhereUniqueInput],
  })
  set?: Array<NodeWhereUniqueInput>;
}

export { NodeUpdateManyWithoutPostalAddressesInput as NodeUpdateManyWithoutPostalAddressesInput };
