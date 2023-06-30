import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class BazaarFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @Field(() => BazaarWhereUniqueInput, { nullable: false })
  where!: BazaarWhereUniqueInput;
}

export { BazaarFindUniqueArgs as BazaarFindUniqueArgs };
