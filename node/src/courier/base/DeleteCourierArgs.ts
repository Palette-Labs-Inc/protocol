import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteCourierArgs {
  @ApiProperty({
    required: true,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @Field(() => CourierWhereUniqueInput, { nullable: false })
  where!: CourierWhereUniqueInput;
}

export { DeleteCourierArgs as DeleteCourierArgs };
