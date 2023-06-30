import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuSectionWhereInput } from "./MenuSectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuSectionOrderByInput } from "./MenuSectionOrderByInput";

@ArgsType()
class MenuSectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuSectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuSectionWhereInput, { nullable: true })
  @Type(() => MenuSectionWhereInput)
  where?: MenuSectionWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuSectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuSectionOrderByInput], { nullable: true })
  @Type(() => MenuSectionOrderByInput)
  orderBy?: Array<MenuSectionOrderByInput>;

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

export { MenuSectionFindManyArgs as MenuSectionFindManyArgs };
