import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrderOrderStatus {
  OrderCreated = "OrderCreated",
  OrderSubmitted = "OrderSubmitted",
  OrderCancelled = "OrderCancelled",
  OrderDelivered = "OrderDelivered",
  OrderInTransit = "OrderInTransit",
  OrderPaymentDue = "OrderPaymentDue",
  OrderPickupAvailable = "OrderPickupAvailable",
  OrderProblem = "OrderProblem",
  OrderProcessing = "OrderProcessing",
  OrderReturned = "OrderReturned",
}

registerEnumType(EnumOrderOrderStatus, {
  name: "EnumOrderOrderStatus",
});
