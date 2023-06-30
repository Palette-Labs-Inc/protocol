import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessListRelationFilter } from "../../localBusiness/base/LocalBusinessListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Customer } from "../../customer/base/Customer";
import { CourierListRelationFilter } from "../../courier/base/CourierListRelationFilter";
import { Courier } from "../../courier/base/Courier";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { Order } from "../../order/base/Order";
import { NodeListRelationFilter } from "../../node/base/NodeListRelationFilter";
import { Node } from "../../node/base/Node";

@InputType()
class PostalAddressWhereInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocalBusinessListRelationFilter)
  @IsOptional()
  @Field(() => LocalBusinessListRelationFilter, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessListRelationFilter;

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
  Customer?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CourierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourierListRelationFilter)
  @IsOptional()
  @Field(() => CourierListRelationFilter, {
    nullable: true,
  })
  Courier?: CourierListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  Order?: OrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => NodeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NodeListRelationFilter)
  @IsOptional()
  @Field(() => NodeListRelationFilter, {
    nullable: true,
  })
  Node?: NodeListRelationFilter;
}

export { PostalAddressWhereInput as PostalAddressWhereInput };
