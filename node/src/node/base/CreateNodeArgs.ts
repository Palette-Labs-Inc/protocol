import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeCreateInput } from "./NodeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateNodeArgs {
  @ApiProperty({
    required: true,
    type: () => NodeCreateInput,
  })
  @ValidateNested()
  @Type(() => NodeCreateInput)
  @Field(() => NodeCreateInput, { nullable: false })
  data!: NodeCreateInput;
}

export { CreateNodeArgs as CreateNodeArgs };
