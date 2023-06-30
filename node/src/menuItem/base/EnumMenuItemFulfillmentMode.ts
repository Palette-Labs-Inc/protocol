import { registerEnumType } from "@nestjs/graphql";

export enum EnumMenuItemFulfillmentMode {
  PickUp = "PickUp",
  Delivery = "Delivery",
  DineIn = "DineIn",
  TakeOut = "TakeOut",
  DriveThru = "DriveThru",
}

registerEnumType(EnumMenuItemFulfillmentMode, {
  name: "EnumMenuItemFulfillmentMode",
});
