import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "bio";

export const UserTitle = (record: TUser): string => {
  return record.bio || String(record.id);
};
