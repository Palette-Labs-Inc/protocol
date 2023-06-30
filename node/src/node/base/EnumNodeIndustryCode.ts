import { registerEnumType } from "@nestjs/graphql";

export enum EnumNodeIndustryCode {
  DeliveryServiceProvider = "DeliveryServiceProvider",
  Rideshare = "Rideshare",
  RestaurantDeliveryService = "RestaurantDeliveryService",
}

registerEnumType(EnumNodeIndustryCode, {
  name: "EnumNodeIndustryCode",
});
