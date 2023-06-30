import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleWhereInput } from "./VehicleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VehicleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VehicleWhereInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereInput)
  @IsOptional()
  @Field(() => VehicleWhereInput, {
    nullable: true,
  })
  every?: VehicleWhereInput;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereInput)
  @IsOptional()
  @Field(() => VehicleWhereInput, {
    nullable: true,
  })
  some?: VehicleWhereInput;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereInput)
  @IsOptional()
  @Field(() => VehicleWhereInput, {
    nullable: true,
  })
  none?: VehicleWhereInput;
}
export { VehicleListRelationFilter as VehicleListRelationFilter };
