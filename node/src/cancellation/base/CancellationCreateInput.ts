import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ValidateNested, IsEnum, IsBoolean, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumCancellationCancelledBy } from "./EnumCancellationCancelledBy";

@InputType()
class CancellationCreateInput {
  @ApiProperty({
    required: true,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput)
  orderNumber!: OrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumCancellationCancelledBy,
  })
  @IsEnum(EnumCancellationCancelledBy)
  @Field(() => EnumCancellationCancelledBy)
  cancelledBy!: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isReasonRequired!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  reason!: string;
}

export { CancellationCreateInput as CancellationCreateInput };
