import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrderType {
  PickUp = "PickUp",
  Delivery = "Delivery",
  DineIn = "DineIn",
  TakeOut = "TakeOut",
  DriveThru = "DriveThru",
}

registerEnumType(EnumOrderType, {
  name: "EnumOrderType",
});
