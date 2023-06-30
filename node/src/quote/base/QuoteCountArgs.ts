import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteWhereInput } from "./QuoteWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuoteCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuoteWhereInput,
  })
  @Field(() => QuoteWhereInput, { nullable: true })
  @Type(() => QuoteWhereInput)
  where?: QuoteWhereInput;
}

export { QuoteCountArgs as QuoteCountArgs };
