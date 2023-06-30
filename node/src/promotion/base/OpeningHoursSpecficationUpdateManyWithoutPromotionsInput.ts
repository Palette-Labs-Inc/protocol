import { InputType, Field } from "@nestjs/graphql";
import { OpeningHoursSpecficationWhereUniqueInput } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OpeningHoursSpecficationUpdateManyWithoutPromotionsInput {
  @Field(() => [OpeningHoursSpecficationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpeningHoursSpecficationWhereUniqueInput],
  })
  connect?: Array<OpeningHoursSpecficationWhereUniqueInput>;

  @Field(() => [OpeningHoursSpecficationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpeningHoursSpecficationWhereUniqueInput],
  })
  disconnect?: Array<OpeningHoursSpecficationWhereUniqueInput>;

  @Field(() => [OpeningHoursSpecficationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpeningHoursSpecficationWhereUniqueInput],
  })
  set?: Array<OpeningHoursSpecficationWhereUniqueInput>;
}

export { OpeningHoursSpecficationUpdateManyWithoutPromotionsInput as OpeningHoursSpecficationUpdateManyWithoutPromotionsInput };
