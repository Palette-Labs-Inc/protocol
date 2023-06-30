import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BazaarUpdateInput } from "./BazaarUpdateInput";

@ArgsType()
class UpdateBazaarArgs {
  @ApiProperty({
    required: true,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @Field(() => BazaarWhereUniqueInput, { nullable: false })
  where!: BazaarWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BazaarUpdateInput,
  })
  @ValidateNested()
  @Type(() => BazaarUpdateInput)
  @Field(() => BazaarUpdateInput, { nullable: false })
  data!: BazaarUpdateInput;
}

export { UpdateBazaarArgs as UpdateBazaarArgs };
