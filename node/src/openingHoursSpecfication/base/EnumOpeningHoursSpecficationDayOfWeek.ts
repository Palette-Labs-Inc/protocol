import { registerEnumType } from "@nestjs/graphql";

export enum EnumOpeningHoursSpecficationDayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

registerEnumType(EnumOpeningHoursSpecficationDayOfWeek, {
  name: "EnumOpeningHoursSpecficationDayOfWeek",
});
