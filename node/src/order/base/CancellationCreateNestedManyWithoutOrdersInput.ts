import { InputType, Field } from "@nestjs/graphql";
import { CancellationWhereUniqueInput } from "../../cancellation/base/CancellationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CancellationCreateNestedManyWithoutOrdersInput {
  @Field(() => [CancellationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CancellationWhereUniqueInput],
  })
  connect?: Array<CancellationWhereUniqueInput>;
}

export { CancellationCreateNestedManyWithoutOrdersInput as CancellationCreateNestedManyWithoutOrdersInput };
