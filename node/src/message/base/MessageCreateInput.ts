import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  senderId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  recipentId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  message!: string;

  @ApiProperty({
    required: true,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput)
  relatedOrder!: OrderWhereUniqueInput;
}

export { MessageCreateInput as MessageCreateInput };
