import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderUpdateManyWithoutOrderDeliveriesInput } from "./OrderUpdateManyWithoutOrderDeliveriesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";

@InputType()
class OrderDeliveryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutOrderDeliveriesInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutOrderDeliveriesInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutOrderDeliveriesInput, {
    nullable: true,
  })
  Order?: OrderUpdateManyWithoutOrderDeliveriesInput;

  @ApiProperty({
    required: false,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierWhereUniqueInput, {
    nullable: true,
  })
  courier?: CourierWhereUniqueInput;
}

export { OrderDeliveryUpdateInput as OrderDeliveryUpdateInput };
