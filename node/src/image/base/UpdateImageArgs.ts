import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ImageUpdateInput } from "./ImageUpdateInput";

@ArgsType()
class UpdateImageArgs {
  @ApiProperty({
    required: true,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  where!: ImageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ImageUpdateInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateInput)
  @Field(() => ImageUpdateInput, { nullable: false })
  data!: ImageUpdateInput;
}

export { UpdateImageArgs as UpdateImageArgs };
