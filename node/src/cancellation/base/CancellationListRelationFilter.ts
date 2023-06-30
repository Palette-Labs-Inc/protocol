import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationWhereInput } from "./CancellationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CancellationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CancellationWhereInput,
  })
  @ValidateNested()
  @Type(() => CancellationWhereInput)
  @IsOptional()
  @Field(() => CancellationWhereInput, {
    nullable: true,
  })
  every?: CancellationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CancellationWhereInput,
  })
  @ValidateNested()
  @Type(() => CancellationWhereInput)
  @IsOptional()
  @Field(() => CancellationWhereInput, {
    nullable: true,
  })
  some?: CancellationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CancellationWhereInput,
  })
  @ValidateNested()
  @Type(() => CancellationWhereInput)
  @IsOptional()
  @Field(() => CancellationWhereInput, {
    nullable: true,
  })
  none?: CancellationWhereInput;
}
export { CancellationListRelationFilter as CancellationListRelationFilter };
