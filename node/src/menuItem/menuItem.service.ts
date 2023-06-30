import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemServiceBase } from "./base/menuItem.service.base";

@Injectable()
export class MenuItemService extends MenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
