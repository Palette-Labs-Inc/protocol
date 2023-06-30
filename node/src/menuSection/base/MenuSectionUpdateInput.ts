import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemUpdateManyWithoutMenuSectionsInput } from "./MenuItemUpdateManyWithoutMenuSectionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { Menu } from "../../menu/base/Menu";

@InputType()
class MenuSectionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutMenuSectionsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutMenuSectionsInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutMenuSectionsInput, {
    nullable: true,
  })
  hasMenuItem?: MenuItemUpdateManyWithoutMenuSectionsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

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

export { MenuSectionUpdateInput as MenuSectionUpdateInput };
