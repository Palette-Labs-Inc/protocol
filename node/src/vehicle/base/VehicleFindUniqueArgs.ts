import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class VehicleFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;
}

export { VehicleFindUniqueArgs as VehicleFindUniqueArgs };
