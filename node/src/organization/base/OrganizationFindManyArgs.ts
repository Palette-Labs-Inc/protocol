import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationOrderByInput } from "./OrganizationOrderByInput";

@ArgsType()
class OrganizationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrganizationWhereInput, { nullable: true })
  @Type(() => OrganizationWhereInput)
  where?: OrganizationWhereInput;

  @ApiProperty({
    required: false,
    type: [OrganizationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrganizationOrderByInput], { nullable: true })
  @Type(() => OrganizationOrderByInput)
  orderBy?: Array<OrganizationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrganizationFindManyArgs as OrganizationFindManyArgs };
