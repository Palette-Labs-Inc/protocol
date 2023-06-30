import { Courier } from "../../courier/base/Courier";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumCancellationCancelledBy {
  Seller = "Seller",
  Buyer = "Buyer",
  Courier = "Courier",
}

registerEnumType(EnumCancellationCancelledBy, {
  name: "EnumCancellationCancelledBy",
});
