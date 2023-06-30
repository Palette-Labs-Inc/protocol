import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierCreateInput } from "./CourierCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCourierArgs {
  @ApiProperty({
    required: true,
    type: () => CourierCreateInput,
  })
  @ValidateNested()
  @Type(() => CourierCreateInput)
  @Field(() => CourierCreateInput, { nullable: false })
  data!: CourierCreateInput;
}

export { CreateCourierArgs as CreateCourierArgs };
