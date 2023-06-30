import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeWhereInput } from "./NodeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NodeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NodeWhereInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereInput)
  @IsOptional()
  @Field(() => NodeWhereInput, {
    nullable: true,
  })
  every?: NodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => NodeWhereInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereInput)
  @IsOptional()
  @Field(() => NodeWhereInput, {
    nullable: true,
  })
  some?: NodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => NodeWhereInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereInput)
  @IsOptional()
  @Field(() => NodeWhereInput, {
    nullable: true,
  })
  none?: NodeWhereInput;
}
export { NodeListRelationFilter as NodeListRelationFilter };
