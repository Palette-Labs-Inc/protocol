import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarCreateInput } from "./BazaarCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateBazaarArgs {
  @ApiProperty({
    required: true,
    type: () => BazaarCreateInput,
  })
  @ValidateNested()
  @Type(() => BazaarCreateInput)
  @Field(() => BazaarCreateInput, { nullable: false })
  data!: BazaarCreateInput;
}

export { CreateBazaarArgs as CreateBazaarArgs };
