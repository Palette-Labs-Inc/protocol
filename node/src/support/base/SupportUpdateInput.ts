import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageUpdateManyWithoutSupportsInput } from "./ImageUpdateManyWithoutSupportsInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { EnumSupportStatus } from "./EnumSupportStatus";
import { EnumSupportAction } from "./EnumSupportAction";

@InputType()
class SupportUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutSupportsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutSupportsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutSupportsInput, {
    nullable: true,
  })
  photo?: ImageUpdateManyWithoutSupportsInput;

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
  customer?: CustomerWhereUniqueInput;

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
    enum: EnumSupportStatus,
  })
  @IsEnum(EnumSupportStatus)
  @IsOptional()
  @Field(() => EnumSupportStatus, {
    nullable: true,
  })
  status?: "Submitted" | "InProgress" | "Fixed" | "Cancelled";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  detail?: string;

  @ApiProperty({
    required: false,
    enum: EnumSupportAction,
  })
  @IsEnum(EnumSupportAction)
  @IsOptional()
  @Field(() => EnumSupportAction, {
    nullable: true,
  })
  action?: "Redelivery" | "Refund" | "Other";
}

export { SupportUpdateInput as SupportUpdateInput };
