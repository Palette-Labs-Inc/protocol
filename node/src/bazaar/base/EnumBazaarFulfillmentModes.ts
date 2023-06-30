import { registerEnumType } from "@nestjs/graphql";

export enum EnumBazaarFulfillmentModes {
  PickUp = "PickUp",
  Delivery = "Delivery",
  DineIn = "DineIn",
  TakeOut = "TakeOut",
  DriveThru = "DriveThru",
}

registerEnumType(EnumBazaarFulfillmentModes, {
  name: "EnumBazaarFulfillmentModes",
});
