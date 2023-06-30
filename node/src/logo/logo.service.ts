import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogoServiceBase } from "./base/logo.service.base";

@Injectable()
export class LogoService extends LogoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
