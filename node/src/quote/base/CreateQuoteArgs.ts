import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteCreateInput } from "./QuoteCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateQuoteArgs {
  @ApiProperty({
    required: true,
    type: () => QuoteCreateInput,
  })
  @ValidateNested()
  @Type(() => QuoteCreateInput)
  @Field(() => QuoteCreateInput, { nullable: false })
  data!: QuoteCreateInput;
}

export { CreateQuoteArgs as CreateQuoteArgs };
