import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AgreementWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
