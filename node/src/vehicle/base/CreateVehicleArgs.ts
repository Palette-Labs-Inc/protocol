import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleCreateInput } from "./VehicleCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateVehicleArgs {
  @ApiProperty({
    required: true,
    type: () => VehicleCreateInput,
  })
  @ValidateNested()
  @Type(() => VehicleCreateInput)
  @Field(() => VehicleCreateInput, { nullable: false })
  data!: VehicleCreateInput;
}

export { CreateVehicleArgs as CreateVehicleArgs };
