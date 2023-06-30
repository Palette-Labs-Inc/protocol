import { registerEnumType } from "@nestjs/graphql";

export enum EnumCourierGender {
  Male = "Male",
  Female = "Female",
  Unknown = "Unknown",
}

registerEnumType(EnumCourierGender, {
  name: "EnumCourierGender",
});
