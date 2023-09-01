import { Module } from "@nestjs/common";
import { AgreementModuleBase } from "./base/agreement.module.base";
import { AgreementService } from "./agreement.service";
import { AgreementController } from "./agreement.controller";
import { AgreementResolver } from "./agreement.resolver";

@Module({
  imports: [AgreementModuleBase],
  controllers: [AgreementController],
  providers: [AgreementService, AgreementResolver],
  exports: [AgreementService],
})
export class AgreementModule {}
