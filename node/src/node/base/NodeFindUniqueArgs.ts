import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class NodeFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => NodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereUniqueInput)
  @Field(() => NodeWhereUniqueInput, { nullable: false })
  where!: NodeWhereUniqueInput;
}

export { NodeFindUniqueArgs as NodeFindUniqueArgs };
