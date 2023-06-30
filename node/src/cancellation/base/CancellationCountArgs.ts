import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationWhereInput } from "./CancellationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CancellationCountArgs {
  @ApiProperty({
    required: false,
    type: () => CancellationWhereInput,
  })
  @Field(() => CancellationWhereInput, { nullable: true })
  @Type(() => CancellationWhereInput)
  where?: CancellationWhereInput;
}

export { CancellationCountArgs as CancellationCountArgs };
