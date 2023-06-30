import { registerEnumType } from "@nestjs/graphql";

export enum EnumSupportStatus {
  Submitted = "Submitted",
  InProgress = "InProgress",
  Fixed = "Fixed",
  Cancelled = "Cancelled",
}

registerEnumType(EnumSupportStatus, {
  name: "EnumSupportStatus",
});
