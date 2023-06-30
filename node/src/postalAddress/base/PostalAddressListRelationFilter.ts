import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostalAddressWhereInput } from "./PostalAddressWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PostalAddressListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereInput)
  @IsOptional()
  @Field(() => PostalAddressWhereInput, {
    nullable: true,
  })
  every?: PostalAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereInput)
  @IsOptional()
  @Field(() => PostalAddressWhereInput, {
    nullable: true,
  })
  some?: PostalAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => PostalAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => PostalAddressWhereInput)
  @IsOptional()
  @Field(() => PostalAddressWhereInput, {
    nullable: true,
  })
  none?: PostalAddressWhereInput;
}
export { PostalAddressListRelationFilter as PostalAddressListRelationFilter };
