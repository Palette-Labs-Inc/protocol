import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Review } from "../../review/base/Review";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Support } from "../../support/base/Support";

@ObjectType()
class Image {
  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  Review?: Array<Review>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => LocalBusiness,
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  LocalBusiness?: LocalBusiness | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;

  @ApiProperty({
    required: false,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  MenuItem?: MenuItem | null;

  @ApiProperty({
    required: false,
    type: () => Support,
  })
  @ValidateNested()
  @Type(() => Support)
  @IsOptional()
  Support?: Support | null;
}

export { Image as Image };
