import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationWhereUniqueInput } from "./OpeningHoursSpecficationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class OpeningHoursSpecficationFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => OpeningHoursSpecficationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationWhereUniqueInput)
  @Field(() => OpeningHoursSpecficationWhereUniqueInput, { nullable: false })
  where!: OpeningHoursSpecficationWhereUniqueInput;
}

export { OpeningHoursSpecficationFindUniqueArgs as OpeningHoursSpecficationFindUniqueArgs };
