import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessListRelationFilter } from "../../localBusiness/base/LocalBusinessListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

@InputType()
class AggregateRatingWhereInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocalBusinessListRelationFilter)
  @IsOptional()
  @Field(() => LocalBusinessListRelationFilter, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  author?: CustomerWhereUniqueInput;
}

export { AggregateRatingWhereInput as AggregateRatingWhereInput };
