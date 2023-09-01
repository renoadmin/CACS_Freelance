import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgreementServiceBase } from "./base/agreement.service.base";

@Injectable()
export class AgreementService extends AgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
