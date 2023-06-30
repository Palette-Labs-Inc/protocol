import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuoteUpdateInput } from "./QuoteUpdateInput";

@ArgsType()
class UpdateQuoteArgs {
  @ApiProperty({
    required: true,
    type: () => QuoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereUniqueInput)
  @Field(() => QuoteWhereUniqueInput, { nullable: false })
  where!: QuoteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuoteUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuoteUpdateInput)
  @Field(() => QuoteUpdateInput, { nullable: false })
  data!: QuoteUpdateInput;
}

export { UpdateQuoteArgs as UpdateQuoteArgs };
