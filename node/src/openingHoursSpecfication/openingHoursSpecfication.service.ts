import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpeningHoursSpecficationServiceBase } from "./base/openingHoursSpecfication.service.base";

@Injectable()
export class OpeningHoursSpecficationService extends OpeningHoursSpecficationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
