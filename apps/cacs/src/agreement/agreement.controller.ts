import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgreementService } from "./agreement.service";
import { AgreementControllerBase } from "./base/agreement.controller.base";

@swagger.ApiTags("agreements")
@common.Controller("agreements")
export class AgreementController extends AgreementControllerBase {
  constructor(protected readonly service: AgreementService) {
    super(service);
  }
}
