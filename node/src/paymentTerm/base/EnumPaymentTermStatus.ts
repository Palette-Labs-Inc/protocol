import { registerEnumType } from "@nestjs/graphql";

export enum EnumPaymentTermStatus {
  Processed = "Processed",
  Collectable = "Collectable",
}

registerEnumType(EnumPaymentTermStatus, {
  name: "EnumPaymentTermStatus",
});
