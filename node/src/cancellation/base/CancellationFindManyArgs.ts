import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationWhereInput } from "./CancellationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CancellationOrderByInput } from "./CancellationOrderByInput";

@ArgsType()
class CancellationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CancellationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CancellationWhereInput, { nullable: true })
  @Type(() => CancellationWhereInput)
  where?: CancellationWhereInput;

  @ApiProperty({
    required: false,
    type: [CancellationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CancellationOrderByInput], { nullable: true })
  @Type(() => CancellationOrderByInput)
  orderBy?: Array<CancellationOrderByInput>;

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

export { CancellationFindManyArgs as CancellationFindManyArgs };
