import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NodeUpdateInput } from "./NodeUpdateInput";

@ArgsType()
class UpdateNodeArgs {
  @ApiProperty({
    required: true,
    type: () => NodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereUniqueInput)
  @Field(() => NodeWhereUniqueInput, { nullable: false })
  where!: NodeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NodeUpdateInput,
  })
  @ValidateNested()
  @Type(() => NodeUpdateInput)
  @Field(() => NodeUpdateInput, { nullable: false })
  data!: NodeUpdateInput;
}

export { UpdateNodeArgs as UpdateNodeArgs };
