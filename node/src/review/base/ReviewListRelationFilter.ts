import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewWhereInput } from "./ReviewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReviewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReviewWhereInput,
  })
  @ValidateNested()
  @Type(() => ReviewWhereInput)
  @IsOptional()
  @Field(() => ReviewWhereInput, {
    nullable: true,
  })
  every?: ReviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReviewWhereInput,
  })
  @ValidateNested()
  @Type(() => ReviewWhereInput)
  @IsOptional()
  @Field(() => ReviewWhereInput, {
    nullable: true,
  })
  some?: ReviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReviewWhereInput,
  })
  @ValidateNested()
  @Type(() => ReviewWhereInput)
  @IsOptional()
  @Field(() => ReviewWhereInput, {
    nullable: true,
  })
  none?: ReviewWhereInput;
}
export { ReviewListRelationFilter as ReviewListRelationFilter };
