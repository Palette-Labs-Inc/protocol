import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuWhereInput } from "./MenuWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuOrderByInput } from "./MenuOrderByInput";

@ArgsType()
class MenuFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuWhereInput, { nullable: true })
  @Type(() => MenuWhereInput)
  where?: MenuWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuOrderByInput], { nullable: true })
  @Type(() => MenuOrderByInput)
  orderBy?: Array<MenuOrderByInput>;

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

export { MenuFindManyArgs as MenuFindManyArgs };
