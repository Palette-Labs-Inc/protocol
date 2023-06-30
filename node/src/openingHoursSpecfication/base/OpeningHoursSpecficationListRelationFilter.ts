import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationWhereInput } from "./OpeningHoursSpecficationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OpeningHoursSpecficationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationWhereInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationWhereInput)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationWhereInput, {
    nullable: true,
  })
  every?: OpeningHoursSpecficationWhereInput;

  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationWhereInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationWhereInput)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationWhereInput, {
    nullable: true,
  })
  some?: OpeningHoursSpecficationWhereInput;

  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationWhereInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationWhereInput)
  @IsOptional()
  @Field(() => OpeningHoursSpecficationWhereInput, {
    nullable: true,
  })
  none?: OpeningHoursSpecficationWhereInput;
}
export { OpeningHoursSpecficationListRelationFilter as OpeningHoursSpecficationListRelationFilter };
