import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumOpeningHoursSpecficationDayOfWeek } from "./EnumOpeningHoursSpecficationDayOfWeek";
import {
  IsEnum,
  IsOptional,
  IsString,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { Promotion } from "../../promotion/base/Promotion";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class OpeningHoursSpecficationUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumOpeningHoursSpecficationDayOfWeek,
  })
  @IsEnum(EnumOpeningHoursSpecficationDayOfWeek)
  @IsOptional()
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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  opens?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  closes?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  validFrom?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  validThrough?: Date;

  @ApiProperty({
    required: false,
    type: () => PromotionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereUniqueInput)
  @IsOptional()
  @Field(() => PromotionWhereUniqueInput, {
    nullable: true,
  })
  Promotion?: PromotionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LocalBusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => LocalBusinessWhereUniqueInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessWhereUniqueInput | null;
}

export { OpeningHoursSpecficationUpdateInput as OpeningHoursSpecficationUpdateInput };
