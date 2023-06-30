import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereInput } from "./BazaarWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BazaarListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BazaarWhereInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereInput)
  @IsOptional()
  @Field(() => BazaarWhereInput, {
    nullable: true,
  })
  every?: BazaarWhereInput;

  @ApiProperty({
    required: false,
    type: () => BazaarWhereInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereInput)
  @IsOptional()
  @Field(() => BazaarWhereInput, {
    nullable: true,
  })
  some?: BazaarWhereInput;

  @ApiProperty({
    required: false,
    type: () => BazaarWhereInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereInput)
  @IsOptional()
  @Field(() => BazaarWhereInput, {
    nullable: true,
  })
  none?: BazaarWhereInput;
}
export { BazaarListRelationFilter as BazaarListRelationFilter };
