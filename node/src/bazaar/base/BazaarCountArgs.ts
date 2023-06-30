import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereInput } from "./BazaarWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BazaarCountArgs {
  @ApiProperty({
    required: false,
    type: () => BazaarWhereInput,
  })
  @Field(() => BazaarWhereInput, { nullable: true })
  @Type(() => BazaarWhereInput)
  where?: BazaarWhereInput;
}

export { BazaarCountArgs as BazaarCountArgs };
