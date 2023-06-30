import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemCreateNestedManyWithoutQuotesInput } from "./OrderItemCreateNestedManyWithoutQuotesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuoteCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutQuotesInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutQuotesInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutQuotesInput, {
    nullable: true,
  })
  orderedItems?: OrderItemCreateNestedManyWithoutQuotesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currency!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  timeToLive!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  totalPrice!: number;
}

export { QuoteCreateInput as QuoteCreateInput };
