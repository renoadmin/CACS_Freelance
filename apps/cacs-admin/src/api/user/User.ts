import { Agreement } from "../agreement/Agreement";
import { JsonValue } from "type-fest";

export type User = {
  agreements?: Array<Agreement>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
