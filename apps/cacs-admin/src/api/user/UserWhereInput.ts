import { AgreementListRelationFilter } from "../agreement/AgreementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  agreements?: AgreementListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  username?: StringFilter;
};
