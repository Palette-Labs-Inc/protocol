import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalBusinessCreateNestedManyWithoutLogosInput } from "./LocalBusinessCreateNestedManyWithoutLogosInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@InputType()
class LogoCreateInput {
  @ApiProperty({
    required: false,
    type: () => LocalBusinessCreateNestedManyWithoutLogosInput,
  })
  @ValidateNested()
  @Type(() => LocalBusinessCreateNestedManyWithoutLogosInput)
  @IsOptional()
  @Field(() => LocalBusinessCreateNestedManyWithoutLogosInput, {
    nullable: true,
  })
  LocalBusiness?: LocalBusinessCreateNestedManyWithoutLogosInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}

export { LogoCreateInput as LogoCreateInput };
