import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderCreateNestedManyWithoutOrderDeliveriesInput } from "./OrderCreateNestedManyWithoutOrderDeliveriesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";

@InputType()
class OrderDeliveryCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutOrderDeliveriesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutOrderDeliveriesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutOrderDeliveriesInput, {
    nullable: true,
  })
  Order?: OrderCreateNestedManyWithoutOrderDeliveriesInput;

  @ApiProperty({
    required: true,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @Field(() => CourierWhereUniqueInput)
  courier!: CourierWhereUniqueInput;
}

export { OrderDeliveryCreateInput as OrderDeliveryCreateInput };
