import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierCreateNestedManyWithoutVehiclesInput } from "./CourierCreateNestedManyWithoutVehiclesInput";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Courier } from "../../courier/base/Courier";

@InputType()
class VehicleCreateInput {
  @ApiProperty({
    required: false,
    type: () => CourierCreateNestedManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => CourierCreateNestedManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => CourierCreateNestedManyWithoutVehiclesInput, {
    nullable: true,
  })
  Courier?: CourierCreateNestedManyWithoutVehiclesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  capacity!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  category!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  color!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  model!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  registeration!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  size!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  wheelCount!: number;
}

export { VehicleCreateInput as VehicleCreateInput };
