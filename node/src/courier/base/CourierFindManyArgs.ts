import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereInput } from "./CourierWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CourierOrderByInput } from "./CourierOrderByInput";

@ArgsType()
class CourierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CourierWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CourierWhereInput, { nullable: true })
  @Type(() => CourierWhereInput)
  where?: CourierWhereInput;

  @ApiProperty({
    required: false,
    type: [CourierOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CourierOrderByInput], { nullable: true })
  @Type(() => CourierOrderByInput)
  orderBy?: Array<CourierOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CourierFindManyArgs as CourierFindManyArgs };
