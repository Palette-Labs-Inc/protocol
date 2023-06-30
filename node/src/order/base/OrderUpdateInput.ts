import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumOrderOrderStatus } from "./EnumOrderOrderStatus";
import { OrderDeliveryWhereUniqueInput } from "../../orderDelivery/base/OrderDeliveryWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { EnumOrderUpdatedBy } from "./EnumOrderUpdatedBy";
import { EnumOrderType } from "./EnumOrderType";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { CancellationUpdateManyWithoutOrdersInput } from "./CancellationUpdateManyWithoutOrdersInput";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { SupportUpdateManyWithoutOrdersInput } from "./SupportUpdateManyWithoutOrdersInput";
import { Support } from "../../support/base/Support";
import { MessageUpdateManyWithoutOrdersInput } from "./MessageUpdateManyWithoutOrdersInput";

@InputType()
class OrderUpdateInput {
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
    enum: EnumOrderOrderStatus,
  })
  @IsEnum(EnumOrderOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderOrderStatus, {
    nullable: true,
  })
  orderStatus?:
    | "OrderCreated"
    | "OrderSubmitted"
    | "OrderCancelled"
    | "OrderDelivered"
    | "OrderInTransit"
    | "OrderPaymentDue"
    | "OrderPickupAvailable"
    | "OrderProblem"
    | "OrderProcessing"
    | "OrderReturned";

  @ApiProperty({
    required: false,
    type: () => OrderDeliveryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderDeliveryWhereUniqueInput, {
    nullable: true,
  })
  orderDelivery?: OrderDeliveryWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderETA?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderReadyTime?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  courierArriedTime?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderPickedupTime?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderCompleteDate?: Date;

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
    type: () => PromotionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereUniqueInput)
  @IsOptional()
  @Field(() => PromotionWhereUniqueInput, {
    nullable: true,
  })
  discount?: PromotionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentTermWhereUniqueInput, {
    nullable: true,
  })
  paymentTerm?: PaymentTermWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  confirmationNumber?: string;

  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @IsOptional()
  @Field(() => PostalAddressWhereUniqueInput, {
    nullable: true,
  })
  deliveryAddress?: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  referenceOrderId?: string;

  @ApiProperty({
    required: false,
    enum: EnumOrderUpdatedBy,
  })
  @IsEnum(EnumOrderUpdatedBy)
  @IsOptional()
  @Field(() => EnumOrderUpdatedBy, {
    nullable: true,
  })
  updatedBy?: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: false,
    enum: EnumOrderType,
  })
  @IsEnum(EnumOrderType)
  @IsOptional()
  @Field(() => EnumOrderType, {
    nullable: true,
  })
  type?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  orderedItem?: OrderItemUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => CancellationUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => CancellationUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => CancellationUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  Cancellation?: CancellationUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => SupportUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => SupportUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => SupportUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  Support?: SupportUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  Messages?: MessageUpdateManyWithoutOrdersInput;
}

export { OrderUpdateInput as OrderUpdateInput };
