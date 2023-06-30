import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { Quote } from "../../quote/base/Quote";

@InputType()
class OrderItemWhereInput {
  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  Order?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemWhereUniqueInput, {
    nullable: true,
  })
  orderedItem?: MenuItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereUniqueInput)
  @IsOptional()
  @Field(() => QuoteWhereUniqueInput, {
    nullable: true,
  })
  Quote?: QuoteWhereUniqueInput;
}

export { OrderItemWhereInput as OrderItemWhereInput };
