import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierListRelationFilter } from "../../courier/base/CourierListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Courier } from "../../courier/base/Courier";

@InputType()
class VehicleWhereInput {
  @ApiProperty({
    required: false,
    type: () => CourierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourierListRelationFilter)
  @IsOptional()
  @Field(() => CourierListRelationFilter, {
    nullable: true,
  })
  Courier?: CourierListRelationFilter;
}

export { VehicleWhereInput as VehicleWhereInput };
