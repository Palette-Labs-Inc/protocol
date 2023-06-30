import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AggregateRatingWhereInput } from "./AggregateRatingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AggregateRatingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AggregateRatingWhereInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereInput)
  @IsOptional()
  @Field(() => AggregateRatingWhereInput, {
    nullable: true,
  })
  every?: AggregateRatingWhereInput;

  @ApiProperty({
    required: false,
    type: () => AggregateRatingWhereInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereInput)
  @IsOptional()
  @Field(() => AggregateRatingWhereInput, {
    nullable: true,
  })
  some?: AggregateRatingWhereInput;

  @ApiProperty({
    required: false,
    type: () => AggregateRatingWhereInput,
  })
  @ValidateNested()
  @Type(() => AggregateRatingWhereInput)
  @IsOptional()
  @Field(() => AggregateRatingWhereInput, {
    nullable: true,
  })
  none?: AggregateRatingWhereInput;
}
export { AggregateRatingListRelationFilter as AggregateRatingListRelationFilter };
