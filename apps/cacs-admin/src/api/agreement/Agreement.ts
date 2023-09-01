import { User } from "../user/User";

export type Agreement = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
