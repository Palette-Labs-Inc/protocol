import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemCreateNestedManyWithoutMenuSectionsInput } from "./MenuItemCreateNestedManyWithoutMenuSectionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { Menu } from "../../menu/base/Menu";

@InputType()
class MenuSectionCreateInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutMenuSectionsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutMenuSectionsInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutMenuSectionsInput, {
    nullable: true,
  })
  hasMenuItem?: MenuItemCreateNestedManyWithoutMenuSectionsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuWhereUniqueInput, {
    nullable: true,
  })
  Menu?: MenuWhereUniqueInput | null;
}

export { MenuSectionCreateInput as MenuSectionCreateInput };
