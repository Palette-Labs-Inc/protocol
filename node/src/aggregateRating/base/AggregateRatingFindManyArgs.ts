import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingWhereInput } from "./AggregateRatingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AggregateRatingOrderByInput } from "./AggregateRatingOrderByInput";

@ArgsType()
class AggregateRatingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AggregateRatingWhereInput, { nullable: true })
  @Type(() => AggregateRatingWhereInput)
  where?: AggregateRatingWhereInput;

  @ApiProperty({
    required: false,
    type: [AggregateRatingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AggregateRatingOrderByInput], { nullable: true })
  @Type(() => AggregateRatingOrderByInput)
  orderBy?: Array<AggregateRatingOrderByInput>;

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

export { AggregateRatingFindManyArgs as AggregateRatingFindManyArgs };
