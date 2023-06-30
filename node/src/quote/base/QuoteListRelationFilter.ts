import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteWhereInput } from "./QuoteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuoteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuoteWhereInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereInput)
  @IsOptional()
  @Field(() => QuoteWhereInput, {
    nullable: true,
  })
  every?: QuoteWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuoteWhereInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereInput)
  @IsOptional()
  @Field(() => QuoteWhereInput, {
    nullable: true,
  })
  some?: QuoteWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuoteWhereInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereInput)
  @IsOptional()
  @Field(() => QuoteWhereInput, {
    nullable: true,
  })
  none?: QuoteWhereInput;
}
export { QuoteListRelationFilter as QuoteListRelationFilter };
