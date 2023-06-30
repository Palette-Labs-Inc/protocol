import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupportServiceBase } from "./base/support.service.base";

@Injectable()
export class SupportService extends SupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
