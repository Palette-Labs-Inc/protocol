import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewWhereInput } from "./ReviewWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ReviewCountArgs {
  @ApiProperty({
    required: false,
    type: () => ReviewWhereInput,
  })
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: ReviewWhereInput;
}

export { ReviewCountArgs as ReviewCountArgs };
