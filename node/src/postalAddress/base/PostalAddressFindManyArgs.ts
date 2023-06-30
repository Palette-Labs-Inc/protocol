import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostalAddressWhereInput } from "./PostalAddressWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PostalAddressOrderByInput } from "./PostalAddressOrderByInput";

@ArgsType()
class PostalAddressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PostalAddressWhereInput, { nullable: true })
  @Type(() => PostalAddressWhereInput)
  where?: PostalAddressWhereInput;

  @ApiProperty({
    required: false,
    type: [PostalAddressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PostalAddressOrderByInput], { nullable: true })
  @Type(() => PostalAddressOrderByInput)
  orderBy?: Array<PostalAddressOrderByInput>;

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

export { PostalAddressFindManyArgs as PostalAddressFindManyArgs };
