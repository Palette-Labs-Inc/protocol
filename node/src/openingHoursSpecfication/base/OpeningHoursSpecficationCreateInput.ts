import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumOpeningHoursSpecficationDayOfWeek } from "./EnumOpeningHoursSpecficationDayOfWeek";
import {
  IsEnum,
  IsString,
  IsDate,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { Promotion } from "../../promotion/base/Promotion";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class OpeningHoursSpecficationCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumOpeningHoursSpecficationDayOfWeek,
  })
  @IsEnum(EnumOpeningHoursSpecficationDayOfWeek)
  @Field(() => EnumOpeningHoursSpecficationDayOfWeek)
  dayOfWeek!:
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

export { OpeningHoursSpecficationCreateInput as OpeningHoursSpecficationCreateInput };
