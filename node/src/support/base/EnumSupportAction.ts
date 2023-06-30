import { registerEnumType } from "@nestjs/graphql";

export enum EnumSupportAction {
  Redelivery = "Redelivery",
  Refund = "Refund",
  Other = "Other",
}

registerEnumType(EnumSupportAction, {
  name: "EnumSupportAction",
});
