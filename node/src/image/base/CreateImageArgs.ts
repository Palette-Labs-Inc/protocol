import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageCreateInput } from "./ImageCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateImageArgs {
  @ApiProperty({
    required: true,
    type: () => ImageCreateInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateInput)
  @Field(() => ImageCreateInput, { nullable: false })
  data!: ImageCreateInput;
}

export { CreateImageArgs as CreateImageArgs };
