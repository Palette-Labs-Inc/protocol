import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemOrderByInput } from "./MenuItemOrderByInput";

@ArgsType()
class MenuItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuItemWhereInput, { nullable: true })
  @Type(() => MenuItemWhereInput)
  where?: MenuItemWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuItemOrderByInput], { nullable: true })
  @Type(() => MenuItemOrderByInput)
  orderBy?: Array<MenuItemOrderByInput>;

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

export { MenuItemFindManyArgs as MenuItemFindManyArgs };
