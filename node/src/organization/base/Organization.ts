import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class Organization {
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
  name!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Organization as Organization };
