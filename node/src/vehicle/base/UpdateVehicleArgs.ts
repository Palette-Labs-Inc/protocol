import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VehicleUpdateInput } from "./VehicleUpdateInput";

@ArgsType()
class UpdateVehicleArgs {
  @ApiProperty({
    required: true,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VehicleUpdateInput,
  })
  @ValidateNested()
  @Type(() => VehicleUpdateInput)
  @Field(() => VehicleUpdateInput, { nullable: false })
  data!: VehicleUpdateInput;
}

export { UpdateVehicleArgs as UpdateVehicleArgs };
