import { registerEnumType } from "@nestjs/graphql";

export enum EnumNodeOperatorType {
  Uno = "UNO",
  Bsn = "BSN",
  Ssn = "SSN",
  Csn = "CSN",
}

registerEnumType(EnumNodeOperatorType, {
  name: "EnumNodeOperatorType",
});
