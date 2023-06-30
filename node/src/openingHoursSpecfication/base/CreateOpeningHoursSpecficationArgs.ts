import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpeningHoursSpecficationCreateInput } from "./OpeningHoursSpecficationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOpeningHoursSpecficationArgs {
  @ApiProperty({
    required: true,
    type: () => OpeningHoursSpecficationCreateInput,
  })
  @ValidateNested()
  @Type(() => OpeningHoursSpecficationCreateInput)
  @Field(() => OpeningHoursSpecficationCreateInput, { nullable: false })
  data!: OpeningHoursSpecficationCreateInput;
}

export { CreateOpeningHoursSpecficationArgs as CreateOpeningHoursSpecficationArgs };
