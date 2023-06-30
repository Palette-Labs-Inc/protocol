import { registerEnumType } from "@nestjs/graphql";

export enum EnumMenuItemSuitableForDiet {
  DiabeticDiet = "DiabeticDiet",
  GlutenFreeDiet = "GlutenFreeDiet",
  HalalDiet = "HalalDiet",
  HinduDiet = "HinduDiet",
  KosherDiet = "KosherDiet",
  LowCalorieDiet = "LowCalorieDiet",
  LowFatDiet = "LowFatDiet",
  LowLactoseDiet = "LowLactoseDiet",
  LowSaltDiet = "LowSaltDiet",
  VeganDiet = "VeganDiet",
  VegetarianDiet = "VegetarianDiet",
}

registerEnumType(EnumMenuItemSuitableForDiet, {
  name: "EnumMenuItemSuitableForDiet",
});
