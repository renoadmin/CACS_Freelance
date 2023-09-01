import * as graphql from "@nestjs/graphql";
import { AgreementResolverBase } from "./base/agreement.resolver.base";
import { Agreement } from "./base/Agreement";
import { AgreementService } from "./agreement.service";

@graphql.Resolver(() => Agreement)
export class AgreementResolver extends AgreementResolverBase {
  constructor(protected readonly service: AgreementService) {
    super(service);
  }
}
