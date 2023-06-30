import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationWhereInput } from "./OpeningHoursSpecficationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OpeningHoursSpecficationOrderByInput } from "./OpeningHoursSpecficationOrderByInput";

@ArgsType()
class OpeningHoursSpecficationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OpeningHoursSpecficationWhereInput, { nullable: true })
  @Type(() => OpeningHoursSpecficationWhereInput)
  where?: OpeningHoursSpecficationWhereInput;

  @ApiProperty({
    required: false,
    type: [OpeningHoursSpecficationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OpeningHoursSpecficationOrderByInput], { nullable: true })
  @Type(() => OpeningHoursSpecficationOrderByInput)
  orderBy?: Array<OpeningHoursSpecficationOrderByInput>;

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

export { OpeningHoursSpecficationFindManyArgs as OpeningHoursSpecficationFindManyArgs };
