import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuSectionServiceBase } from "./base/menuSection.service.base";

@Injectable()
export class MenuSectionService extends MenuSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
