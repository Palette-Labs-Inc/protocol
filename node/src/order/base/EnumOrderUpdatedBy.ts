import { Courier } from "../../courier/base/Courier";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrderUpdatedBy {
  Seller = "Seller",
  Buyer = "Buyer",
  Courier = "Courier",
}

registerEnumType(EnumOrderUpdatedBy, {
  name: "EnumOrderUpdatedBy",
});
