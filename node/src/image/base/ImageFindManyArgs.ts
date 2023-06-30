import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageWhereInput } from "./ImageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ImageOrderByInput } from "./ImageOrderByInput";

@ArgsType()
class ImageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ImageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ImageWhereInput, { nullable: true })
  @Type(() => ImageWhereInput)
  where?: ImageWhereInput;

  @ApiProperty({
    required: false,
    type: [ImageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ImageOrderByInput], { nullable: true })
  @Type(() => ImageOrderByInput)
  orderBy?: Array<ImageOrderByInput>;

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

export { ImageFindManyArgs as ImageFindManyArgs };
