import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsEnum,
  IsDate,
  IsOptional,
} from "class-validator";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Type } from "class-transformer";
import { EnumOrderOrderStatus } from "./EnumOrderOrderStatus";
import { OrderDelivery } from "../../orderDelivery/base/OrderDelivery";
import { Customer } from "../../customer/base/Customer";
import { Promotion } from "../../promotion/base/Promotion";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { PostalAddress } from "../../postalAddress/base/PostalAddress";
import { EnumOrderUpdatedBy } from "./EnumOrderUpdatedBy";
import { EnumOrderType } from "./EnumOrderType";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { Support } from "../../support/base/Support";
import { Message } from "../../message/base/Message";

@ObjectType()
class Order {
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
    enum: EnumOrderOrderStatus,
  })
  @IsEnum(EnumOrderOrderStatus)
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
    required: true,
    type: () => OrderDelivery,
  })
  @ValidateNested()
  @Type(() => OrderDelivery)
  orderDelivery?: OrderDelivery;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderETA!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderReadyTime!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  courierArriedTime!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderPickedupTime!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderCompleteDate!: Date;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customer?: Customer;

  @ApiProperty({
    required: true,
    type: () => Promotion,
  })
  @ValidateNested()
  @Type(() => Promotion)
  discount?: Promotion;

  @ApiProperty({
    required: true,
    type: () => PaymentTerm,
  })
  @ValidateNested()
  @Type(() => PaymentTerm)
  paymentTerm?: PaymentTerm | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  confirmationNumber!: string;

  @ApiProperty({
    required: true,
    type: () => PostalAddress,
  })
  @ValidateNested()
  @Type(() => PostalAddress)
  deliveryAddress?: PostalAddress;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  referenceOrderId!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumOrderUpdatedBy,
  })
  @IsEnum(EnumOrderUpdatedBy)
  @Field(() => EnumOrderUpdatedBy, {
    nullable: true,
  })
  updatedBy?: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: true,
    enum: EnumOrderType,
  })
  @IsEnum(EnumOrderType)
  @Field(() => EnumOrderType, {
    nullable: true,
  })
  type?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  orderedItem?: Array<OrderItem>;

  @ApiProperty({
    required: false,
    type: () => [Cancellation],
  })
  @ValidateNested()
  @Type(() => Cancellation)
  @IsOptional()
  Cancellation?: Array<Cancellation>;

  @ApiProperty({
    required: false,
    type: () => [Support],
  })
  @ValidateNested()
  @Type(() => Support)
  @IsOptional()
  Support?: Array<Support>;

  @ApiProperty({
    required: false,
    type: () => [Message],
  })
  @ValidateNested()
  @Type(() => Message)
  @IsOptional()
  Messages?: Array<Message>;
}

export { Order as Order };
