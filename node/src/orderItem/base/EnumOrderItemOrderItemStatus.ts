import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrderItemOrderItemStatus {
  BackOrder = "BackOrder",
  Discontinued = "Discontinued",
  InStock = "InStock",
  InStoreOnly = "InStoreOnly",
  LimitedAvailability = "LimitedAvailability",
  OnlineOnly = "OnlineOnly",
  OutOfStock = "OutOfStock",
  PreOrder = "PreOrder",
  PreSale = "PreSale",
  SoldOut = "SoldOut",
}

registerEnumType(EnumOrderItemOrderItemStatus, {
  name: "EnumOrderItemOrderItemStatus",
});
