export type ErrorResponse = {
  status: number;
  title: string;
  detail: string;
};

export type PaginatedList<T> = {
  data: T[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
};

export type AuditedEntity = {
  createdOn: string;
  updatedOn: string;
};
