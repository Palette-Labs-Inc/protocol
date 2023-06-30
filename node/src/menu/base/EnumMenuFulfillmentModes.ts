import { registerEnumType } from "@nestjs/graphql";

export enum EnumMenuFulfillmentModes {
  PickUp = "PickUp",
  Delivery = "Delivery",
  DineIn = "DineIn",
  TakeOut = "TakeOut",
  DriveThru = "DriveThru",
}

registerEnumType(EnumMenuFulfillmentModes, {
  name: "EnumMenuFulfillmentModes",
});
