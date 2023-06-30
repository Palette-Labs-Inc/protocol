import { MenuItem } from "../../menuItem/base/MenuItem";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Courier } from "../../courier/base/Courier";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumAggregateRatingItemReviewed {
  MenuItem = "MenuItem",
  LocalBusiness = "LocalBusiness",
  Courier = "Courier",
}

registerEnumType(EnumAggregateRatingItemReviewed, {
  name: "EnumAggregateRatingItemReviewed",
});
