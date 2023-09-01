import { AgreementCreateNestedManyWithoutUsersInput } from "./AgreementCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  agreements?: AgreementCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
