import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemListRelationFilter } from "../../orderItem/base/OrderItemListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuoteWhereInput {
  @ApiProperty({
    required: false,
    type: () => OrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderItemListRelationFilter)
  @IsOptional()
  @Field(() => OrderItemListRelationFilter, {
    nullable: true,
  })
  orderedItems?: OrderItemListRelationFilter;
}

export { QuoteWhereInput as QuoteWhereInput };
