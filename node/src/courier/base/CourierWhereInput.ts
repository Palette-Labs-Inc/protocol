import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { OrderDeliveryListRelationFilter } from "../../orderDelivery/base/OrderDeliveryListRelationFilter";
import { OrderDelivery } from "../../orderDelivery/base/OrderDelivery";

@InputType()
class CourierWhereInput {
  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  review?: ReviewListRelationFilter;

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
  address?: PostalAddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @IsOptional()
  @Field(() => BazaarWhereUniqueInput, {
    nullable: true,
  })
  bazaar?: BazaarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderDeliveryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderDeliveryListRelationFilter)
  @IsOptional()
  @Field(() => OrderDeliveryListRelationFilter, {
    nullable: true,
  })
  OrderDelivery?: OrderDeliveryListRelationFilter;
}

export { CourierWhereInput as CourierWhereInput };
