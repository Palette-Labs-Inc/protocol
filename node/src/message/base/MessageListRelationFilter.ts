import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageWhereInput } from "./MessageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MessageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MessageWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageWhereInput)
  @IsOptional()
  @Field(() => MessageWhereInput, {
    nullable: true,
  })
  every?: MessageWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessageWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageWhereInput)
  @IsOptional()
  @Field(() => MessageWhereInput, {
    nullable: true,
  })
  some?: MessageWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessageWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageWhereInput)
  @IsOptional()
  @Field(() => MessageWhereInput, {
    nullable: true,
  })
  none?: MessageWhereInput;
}
export { MessageListRelationFilter as MessageListRelationFilter };
