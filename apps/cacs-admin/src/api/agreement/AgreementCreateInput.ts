import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AgreementCreateInput = {
  user?: UserWhereUniqueInput | null;
};
