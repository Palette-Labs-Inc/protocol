import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeWhereInput } from "./NodeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class NodeCountArgs {
  @ApiProperty({
    required: false,
    type: () => NodeWhereInput,
  })
  @Field(() => NodeWhereInput, { nullable: true })
  @Type(() => NodeWhereInput)
  where?: NodeWhereInput;
}

export { NodeCountArgs as NodeCountArgs };
