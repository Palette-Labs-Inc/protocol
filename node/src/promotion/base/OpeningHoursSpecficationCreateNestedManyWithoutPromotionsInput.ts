import { InputType, Field } from "@nestjs/graphql";
import { OpeningHoursSpecficationWhereUniqueInput } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput {
  @Field(() => [OpeningHoursSpecficationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpeningHoursSpecficationWhereUniqueInput],
  })
  connect?: Array<OpeningHoursSpecficationWhereUniqueInput>;
}

export { OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput as OpeningHoursSpecficationCreateNestedManyWithoutPromotionsInput };
