import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NutritionInformationServiceBase } from "./base/nutritionInformation.service.base";

@Injectable()
export class NutritionInformationService extends NutritionInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
