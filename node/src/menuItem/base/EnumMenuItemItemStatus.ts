import { registerEnumType } from "@nestjs/graphql";

export enum EnumMenuItemItemStatus {
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

registerEnumType(EnumMenuItemItemStatus, {
  name: "EnumMenuItemItemStatus",
});
