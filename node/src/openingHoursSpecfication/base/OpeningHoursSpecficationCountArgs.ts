import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationWhereInput } from "./OpeningHoursSpecficationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OpeningHoursSpecficationCountArgs {
  @ApiProperty({
    required: false,
    type: () => OpeningHoursSpecficationWhereInput,
  })
  @Field(() => OpeningHoursSpecficationWhereInput, { nullable: true })
  @Type(() => OpeningHoursSpecficationWhereInput)
  where?: OpeningHoursSpecficationWhereInput;
}

export { OpeningHoursSpecficationCountArgs as OpeningHoursSpecficationCountArgs };
