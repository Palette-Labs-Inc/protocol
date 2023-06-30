import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import {
  ValidateNested,
  IsEnum,
  IsDate,
  IsString,
  IsOptional,
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
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { CancellationCreateNestedManyWithoutOrdersInput } from "./CancellationCreateNestedManyWithoutOrdersInput";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { SupportCreateNestedManyWithoutOrdersInput } from "./SupportCreateNestedManyWithoutOrdersInput";
import { Support } from "../../support/base/Support";
import { MessageCreateNestedManyWithoutOrdersInput } from "./MessageCreateNestedManyWithoutOrdersInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: true,
    type: () => LocalBusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessWhereUniqueInput)
  @Field(() => LocalBusinessWhereUniqueInput)
  seller!: LocalBusinessWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumOrderOrderStatus,
  })
  @IsEnum(EnumOrderOrderStatus)
  @Field(() => EnumOrderOrderStatus)
  orderStatus!:
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
    type: () => OrderDeliveryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryWhereUniqueInput)
  @Field(() => OrderDeliveryWhereUniqueInput)
  orderDelivery!: OrderDeliveryWhereUniqueInput;

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
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customer!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PromotionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromotionWhereUniqueInput)
  @Field(() => PromotionWhereUniqueInput)
  discount!: PromotionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @Field(() => PaymentTermWhereUniqueInput)
  paymentTerm!: PaymentTermWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  confirmationNumber!: string;

  @ApiProperty({
    required: true,
    type: () => PostalAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereUniqueInput)
  @Field(() => PostalAddressWhereUniqueInput)
  deliveryAddress!: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  referenceOrderId!: string;

  @ApiProperty({
    required: true,
    enum: EnumOrderUpdatedBy,
  })
  @IsEnum(EnumOrderUpdatedBy)
  @Field(() => EnumOrderUpdatedBy)
  updatedBy!: "Seller" | "Buyer" | "Courier";

  @ApiProperty({
    required: true,
    enum: EnumOrderType,
  })
  @IsEnum(EnumOrderType)
  @Field(() => EnumOrderType)
  type!: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  orderedItem?: OrderItemCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => CancellationCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => CancellationCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => CancellationCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  Cancellation?: CancellationCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => SupportCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => SupportCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => SupportCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  Support?: SupportCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  Messages?: MessageCreateNestedManyWithoutOrdersInput;
}

export { OrderCreateInput as OrderCreateInput };
