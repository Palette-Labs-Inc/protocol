import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsEnum,
  IsDate,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { EnumOpeningHoursSpecficationDayOfWeek } from "./EnumOpeningHoursSpecficationDayOfWeek";
import { Type } from "class-transformer";
import { Promotion } from "../../promotion/base/Promotion";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@ObjectType()
class OpeningHoursSpecfication {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumOpeningHoursSpecficationDayOfWeek,
  })
  @IsEnum(EnumOpeningHoursSpecficationDayOfWeek)
  @Field(() => EnumOpeningHoursSpecficationDayOfWeek, {
    nullable: true,
  })
  dayOfWeek?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  opens!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  closes!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  validFrom!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  validThrough!: Date;

  @ApiProperty({
    required: false,
    type: () => Promotion,
  })
  @ValidateNested()
  @Type(() => Promotion)
  @IsOptional()
  Promotion?: Promotion | null;

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

  @ApiProperty({
    required: false,
    type: () => LocalBusiness,
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  @IsOptional()
  LocalBusiness?: LocalBusiness | null;
}

export { OpeningHoursSpecfication as OpeningHoursSpecfication };
