import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierUpdateManyWithoutVehiclesInput } from "./CourierUpdateManyWithoutVehiclesInput";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Courier } from "../../courier/base/Courier";

@InputType()
class VehicleUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourierUpdateManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => CourierUpdateManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => CourierUpdateManyWithoutVehiclesInput, {
    nullable: true,
  })
  Courier?: CourierUpdateManyWithoutVehiclesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  registeration?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  size?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  wheelCount?: number;
}

export { VehicleUpdateInput as VehicleUpdateInput };
