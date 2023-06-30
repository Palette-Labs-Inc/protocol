import { registerEnumType } from "@nestjs/graphql";

export enum EnumCustomerGender {
  Male = "Male",
  Female = "Female",
  Unknown = "Unknown",
}

registerEnumType(EnumCustomerGender, {
  name: "EnumCustomerGender",
});
