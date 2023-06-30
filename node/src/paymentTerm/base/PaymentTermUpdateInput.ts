import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { EnumPaymentTermLifecycleProcessing } from "./EnumPaymentTermLifecycleProcessing";
import { EnumPaymentTermPaymentMethod } from "./EnumPaymentTermPaymentMethod";
import { EnumPaymentTermStatus } from "./EnumPaymentTermStatus";

@InputType()
class PaymentTermUpdateInput {
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
  order?: OrderWhereUniqueInput | null;

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
  seller?: LocalBusinessWhereUniqueInput;

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
    enum: EnumPaymentTermLifecycleProcessing,
  })
  @IsEnum(EnumPaymentTermLifecycleProcessing)
  @IsOptional()
  @Field(() => EnumPaymentTermLifecycleProcessing, {
    nullable: true,
  })
  lifecycleProcessing?:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  orderPrice?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  tip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  servicePrice?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymentCurrency?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  commissionCharged?: number;

  @ApiProperty({
    required: false,
    enum: EnumPaymentTermPaymentMethod,
  })
  @IsEnum(EnumPaymentTermPaymentMethod)
  @IsOptional()
  @Field(() => EnumPaymentTermPaymentMethod, {
    nullable: true,
  })
  paymentMethod?:
    | "CreditCard"
    | "Cash"
    | "Invoice"
    | "Paypal"
    | "GoogleCheckout"
    | "BankTransferInAdvance"
    | "CheckInAdvance"
    | "COD"
    | "DirectDebit"
    | "PaySwarm";

  @ApiProperty({
    required: false,
    enum: EnumPaymentTermStatus,
  })
  @IsEnum(EnumPaymentTermStatus)
  @IsOptional()
  @Field(() => EnumPaymentTermStatus, {
    nullable: true,
  })
  status?: "Processed" | "Collectable";
}

export { PaymentTermUpdateInput as PaymentTermUpdateInput };
