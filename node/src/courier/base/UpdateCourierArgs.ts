import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CourierUpdateInput } from "./CourierUpdateInput";

@ArgsType()
class UpdateCourierArgs {
  @ApiProperty({
    required: true,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @Field(() => CourierWhereUniqueInput, { nullable: false })
  where!: CourierWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CourierUpdateInput,
  })
  @ValidateNested()
  @Type(() => CourierUpdateInput)
  @Field(() => CourierUpdateInput, { nullable: false })
  data!: CourierUpdateInput;
}

export { UpdateCourierArgs as UpdateCourierArgs };
