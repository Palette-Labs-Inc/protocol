import { InputType, Field } from "@nestjs/graphql";
import { CancellationWhereUniqueInput } from "../../cancellation/base/CancellationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CancellationUpdateManyWithoutOrdersInput {
  @Field(() => [CancellationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CancellationWhereUniqueInput],
  })
  connect?: Array<CancellationWhereUniqueInput>;

  @Field(() => [CancellationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CancellationWhereUniqueInput],
  })
  disconnect?: Array<CancellationWhereUniqueInput>;

  @Field(() => [CancellationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CancellationWhereUniqueInput],
  })
  set?: Array<CancellationWhereUniqueInput>;
}

export { CancellationUpdateManyWithoutOrdersInput as CancellationUpdateManyWithoutOrdersInput };
