import { InputType, Field } from "@nestjs/graphql";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CourierUpdateManyWithoutBazaarsInput {
  @Field(() => [CourierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierWhereUniqueInput],
  })
  connect?: Array<CourierWhereUniqueInput>;

  @Field(() => [CourierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierWhereUniqueInput],
  })
  disconnect?: Array<CourierWhereUniqueInput>;

  @Field(() => [CourierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierWhereUniqueInput],
  })
  set?: Array<CourierWhereUniqueInput>;
}

export { CourierUpdateManyWithoutBazaarsInput as CourierUpdateManyWithoutBazaarsInput };
