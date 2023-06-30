import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteBazaarArgs {
  @ApiProperty({
    required: true,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @Field(() => BazaarWhereUniqueInput, { nullable: false })
  where!: BazaarWhereUniqueInput;
}

export { DeleteBazaarArgs as DeleteBazaarArgs };
