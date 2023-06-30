import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class Logo {
  @ApiProperty({
    required: false,
    type: () => [LocalBusiness],
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  LocalBusiness?: Array<LocalBusiness>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}

export { Logo as Logo };
