import { Agreement as TAgreement } from "../api/agreement/Agreement";

export const AGREEMENT_TITLE_FIELD = "id";

export const AgreementTitle = (record: TAgreement): string => {
  return record.id || String(record.id);
};
