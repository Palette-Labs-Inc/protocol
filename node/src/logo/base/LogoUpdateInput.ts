import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessUpdateManyWithoutLogosInput } from "./LocalBusinessUpdateManyWithoutLogosInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class LogoUpdateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessUpdateManyWithoutLogosInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessUpdateManyWithoutLogosInput)
  @IsOptional()
  @Field(() => LocalBusinessUpdateManyWithoutLogosInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessUpdateManyWithoutLogosInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string;
}

export { LogoUpdateInput as LogoUpdateInput };
