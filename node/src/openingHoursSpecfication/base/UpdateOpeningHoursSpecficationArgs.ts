import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationWhereUniqueInput } from "./OpeningHoursSpecficationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OpeningHoursSpecficationUpdateInput } from "./OpeningHoursSpecficationUpdateInput";

@ArgsType()
class UpdateOpeningHoursSpecficationArgs {
  @ApiProperty({
    required: true,
    type: () => OpeningHoursSpecficationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationWhereUniqueInput)
  @Field(() => OpeningHoursSpecficationWhereUniqueInput, { nullable: false })
  where!: OpeningHoursSpecficationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OpeningHoursSpecficationUpdateInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationUpdateInput)
  @Field(() => OpeningHoursSpecficationUpdateInput, { nullable: false })
  data!: OpeningHoursSpecficationUpdateInput;
}

export { UpdateOpeningHoursSpecficationArgs as UpdateOpeningHoursSpecficationArgs };
