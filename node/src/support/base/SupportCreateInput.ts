import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageCreateNestedManyWithoutSupportsInput } from "./ImageCreateNestedManyWithoutSupportsInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { EnumSupportStatus } from "./EnumSupportStatus";
import { EnumSupportAction } from "./EnumSupportAction";

@InputType()
class SupportCreateInput {
  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutSupportsInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutSupportsInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutSupportsInput, {
    nullable: true,
  })
  photo?: ImageCreateNestedManyWithoutSupportsInput;

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
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput)
  orderNumber!: OrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumSupportStatus,
  })
  @IsEnum(EnumSupportStatus)
  @Field(() => EnumSupportStatus)
  status!: "Submitted" | "InProgress" | "Fixed" | "Cancelled";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  detail!: string;

  @ApiProperty({
    required: true,
    enum: EnumSupportAction,
  })
  @IsEnum(EnumSupportAction)
  @Field(() => EnumSupportAction)
  action!: "Redelivery" | "Refund" | "Other";
}

export { SupportCreateInput as SupportCreateInput };
