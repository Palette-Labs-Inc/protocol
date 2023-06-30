import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Order } from "../../order/base/Order";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Customer } from "../../customer/base/Customer";
import { EnumPaymentTermLifecycleProcessing } from "./EnumPaymentTermLifecycleProcessing";
import { EnumPaymentTermPaymentMethod } from "./EnumPaymentTermPaymentMethod";
import { EnumPaymentTermStatus } from "./EnumPaymentTermStatus";

@ObjectType()
class PaymentTerm {
  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  order?: Order | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => LocalBusiness,
  })
  @ValidateNested()
  @Type(() => LocalBusiness)
  seller?: LocalBusiness;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customer?: Customer;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumPaymentTermLifecycleProcessing,
  })
  @IsEnum(EnumPaymentTermLifecycleProcessing)
  @Field(() => EnumPaymentTermLifecycleProcessing, {
    nullable: true,
  })
  lifecycleProcessing?:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  orderPrice!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  tip!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  servicePrice!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  paymentCurrency!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  commissionCharged!: number;

  @ApiProperty({
    required: true,
    enum: EnumPaymentTermPaymentMethod,
  })
  @IsEnum(EnumPaymentTermPaymentMethod)
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
    required: true,
    enum: EnumPaymentTermStatus,
  })
  @IsEnum(EnumPaymentTermStatus)
  @Field(() => EnumPaymentTermStatus, {
    nullable: true,
  })
  status?: "Processed" | "Collectable";
}

export { PaymentTerm as PaymentTerm };
