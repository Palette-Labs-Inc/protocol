import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { OrderDeliveryWhereUniqueInput } from "../../orderDelivery/base/OrderDeliveryWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { OrderItemListRelationFilter } from "../../orderItem/base/OrderItemListRelationFilter";
import { CancellationListRelationFilter } from "../../cancellation/base/CancellationListRelationFilter";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { SupportListRelationFilter } from "../../support/base/SupportListRelationFilter";
import { Support } from "../../support/base/Support";
import { MessageListRelationFilter } from "../../message/base/MessageListRelationFilter";

@InputType()
class OrderWhereInput {
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
  paymentTerm?: PaymentTermWhereUniqueInput;

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
    type: () => OrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderItemListRelationFilter)
  @IsOptional()
  @Field(() => OrderItemListRelationFilter, {
    nullable: true,
  })
  orderedItem?: OrderItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CancellationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CancellationListRelationFilter)
  @IsOptional()
  @Field(() => CancellationListRelationFilter, {
    nullable: true,
  })
  Cancellation?: CancellationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SupportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupportListRelationFilter)
  @IsOptional()
  @Field(() => SupportListRelationFilter, {
    nullable: true,
  })
  Support?: SupportListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MessageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MessageListRelationFilter)
  @IsOptional()
  @Field(() => MessageListRelationFilter, {
    nullable: true,
  })
  Messages?: MessageListRelationFilter;
}

export { OrderWhereInput as OrderWhereInput };
