import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereInput } from "./LocalBusinessWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusinessOrderByInput } from "./LocalBusinessOrderByInput";

@ArgsType()
class LocalBusinessFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LocalBusinessWhereInput, { nullable: true })
  @Type(() => LocalBusinessWhereInput)
  where?: LocalBusinessWhereInput;

  @ApiProperty({
    required: false,
    type: [LocalBusinessOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LocalBusinessOrderByInput], { nullable: true })
  @Type(() => LocalBusinessOrderByInput)
  orderBy?: Array<LocalBusinessOrderByInput>;

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

export { LocalBusinessFindManyArgs as LocalBusinessFindManyArgs };
