import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereInput } from "./BazaarWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BazaarOrderByInput } from "./BazaarOrderByInput";

@ArgsType()
class BazaarFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BazaarWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BazaarWhereInput, { nullable: true })
  @Type(() => BazaarWhereInput)
  where?: BazaarWhereInput;

  @ApiProperty({
    required: false,
    type: [BazaarOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BazaarOrderByInput], { nullable: true })
  @Type(() => BazaarOrderByInput)
  orderBy?: Array<BazaarOrderByInput>;

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

export { BazaarFindManyArgs as BazaarFindManyArgs };
