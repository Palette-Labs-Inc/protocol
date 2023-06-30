import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogoWhereInput } from "./LogoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LogoOrderByInput } from "./LogoOrderByInput";

@ArgsType()
class LogoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LogoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LogoWhereInput, { nullable: true })
  @Type(() => LogoWhereInput)
  where?: LogoWhereInput;

  @ApiProperty({
    required: false,
    type: [LogoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LogoOrderByInput], { nullable: true })
  @Type(() => LogoOrderByInput)
  orderBy?: Array<LogoOrderByInput>;

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

export { LogoFindManyArgs as LogoFindManyArgs };
