import { registerEnumType } from "@nestjs/graphql";

export enum EnumLocalBusinessCategory {
  Restaurant = "Restaurant",
  Grocery = "Grocery",
  Flower = "Flower",
}

registerEnumType(EnumLocalBusinessCategory, {
  name: "EnumLocalBusinessCategory",
});
