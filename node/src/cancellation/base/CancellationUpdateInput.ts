import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";

@InputType()
class CancellationUpdateInput {
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
  orderNumber?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumCancellationCancelledBy,
  })
  @IsEnum(EnumCancellationCancelledBy)
  @IsOptional()
  @Field(() => EnumCancellationCancelledBy, {
    nullable: true,
  })
  cancelledBy?: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isReasonRequired?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reason?: string;
}

export { CancellationUpdateInput as CancellationUpdateInput };
