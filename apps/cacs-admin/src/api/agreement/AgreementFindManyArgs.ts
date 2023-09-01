import { AgreementWhereInput } from "./AgreementWhereInput";
import { AgreementOrderByInput } from "./AgreementOrderByInput";

export type AgreementFindManyArgs = {
  where?: AgreementWhereInput;
  orderBy?: Array<AgreementOrderByInput>;
  skip?: number;
  take?: number;
};
