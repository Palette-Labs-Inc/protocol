import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuServiceBase } from "./base/menu.service.base";

@Injectable()
export class MenuService extends MenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
