import { AuditedEntity } from ".";

export type User = AuditedEntity & {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  disabled: boolean;
  profileImageUrl: string;
  roles?: string[];
};
