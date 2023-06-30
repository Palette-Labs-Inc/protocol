import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereInput } from "./CourierWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CourierCountArgs {
  @ApiProperty({
    required: false,
    type: () => CourierWhereInput,
  })
  @Field(() => CourierWhereInput, { nullable: true })
  @Type(() => CourierWhereInput)
  where?: CourierWhereInput;
}

export { CourierCountArgs as CourierCountArgs };
