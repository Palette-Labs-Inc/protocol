import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Promotion } from "../../promotion/base/Promotion";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class OpeningHoursSpecficationWhereInput {
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
  Promotion?: PromotionWhereUniqueInput;

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
  LocalBusiness?: LocalBusinessWhereUniqueInput;
}

export { OpeningHoursSpecficationWhereInput as OpeningHoursSpecficationWhereInput };
