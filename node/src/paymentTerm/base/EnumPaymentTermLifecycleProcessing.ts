import { registerEnumType } from "@nestjs/graphql";

export enum EnumPaymentTermLifecycleProcessing {
  PreOrder = "PreOrder",
  PreFulfillment = "PreFulfillment",
  OnFulfillment = "OnFulfillment",
  PostFulfillment = "PostFulfillment",
}

registerEnumType(EnumPaymentTermLifecycleProcessing, {
  name: "EnumPaymentTermLifecycleProcessing",
});
