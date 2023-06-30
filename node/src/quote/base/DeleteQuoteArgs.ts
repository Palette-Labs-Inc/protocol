import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteQuoteArgs {
  @ApiProperty({
    required: true,
    type: () => QuoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereUniqueInput)
  @Field(() => QuoteWhereUniqueInput, { nullable: false })
  where!: QuoteWhereUniqueInput;
}

export { DeleteQuoteArgs as DeleteQuoteArgs };
