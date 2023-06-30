import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleWhereInput } from "./VehicleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VehicleCountArgs {
  @ApiProperty({
    required: false,
    type: () => VehicleWhereInput,
  })
  @Field(() => VehicleWhereInput, { nullable: true })
  @Type(() => VehicleWhereInput)
  where?: VehicleWhereInput;
}

export { VehicleCountArgs as VehicleCountArgs };
