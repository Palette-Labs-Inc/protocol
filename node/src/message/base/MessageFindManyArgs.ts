import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageWhereInput } from "./MessageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MessageOrderByInput } from "./MessageOrderByInput";

@ArgsType()
class MessageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MessageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MessageWhereInput, { nullable: true })
  @Type(() => MessageWhereInput)
  where?: MessageWhereInput;

  @ApiProperty({
    required: false,
    type: [MessageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MessageOrderByInput], { nullable: true })
  @Type(() => MessageOrderByInput)
  orderBy?: Array<MessageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MessageFindManyArgs as MessageFindManyArgs };
