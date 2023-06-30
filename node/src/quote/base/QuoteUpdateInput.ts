import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemUpdateManyWithoutQuotesInput } from "./OrderItemUpdateManyWithoutQuotesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuoteUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutQuotesInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutQuotesInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutQuotesInput, {
    nullable: true,
  })
  orderedItems?: OrderItemUpdateManyWithoutQuotesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeToLive?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number;
}

export { QuoteUpdateInput as QuoteUpdateInput };
