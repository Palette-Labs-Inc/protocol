import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageWhereInput } from "./ImageWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ImageCountArgs {
  @ApiProperty({
    required: false,
    type: () => ImageWhereInput,
  })
  @Field(() => ImageWhereInput, { nullable: true })
  @Type(() => ImageWhereInput)
  where?: ImageWhereInput;
}

export { ImageCountArgs as ImageCountArgs };
