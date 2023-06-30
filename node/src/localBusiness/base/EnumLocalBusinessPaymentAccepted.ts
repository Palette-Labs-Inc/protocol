import { registerEnumType } from "@nestjs/graphql";

export enum EnumLocalBusinessPaymentAccepted {
  CreditCard = "CreditCard",
  Cash = "Cash",
  Invoice = "Invoice",
  Paypal = "Paypal",
  GoogleCheckout = "GoogleCheckout",
  BankTransferInAdvance = "BankTransferInAdvance",
  CheckInAdvance = "CheckInAdvance",
  Cod = "COD",
  DirectDebit = "DirectDebit",
  PaySwarm = "PaySwarm",
}

registerEnumType(EnumLocalBusinessPaymentAccepted, {
  name: "EnumLocalBusinessPaymentAccepted",
});
