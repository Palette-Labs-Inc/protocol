import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ImageFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  where!: ImageWhereUniqueInput;
}

export { ImageFindUniqueArgs as ImageFindUniqueArgs };
