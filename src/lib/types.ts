import dictionary from '../locales/dictionary';
import type ru from '../locales/ru';

export type LangList = keyof typeof dictionary;
export type LangDictionary = typeof ru;

export type SortDirection = 'ASC' | 'DESC';

export interface IPaginationItem {
  key: string | number;
  value: number;
}

export interface ITableColumn<T = unknown> {
  name?: string;
  key: T extends Object ? Partial<keyof T> | String : string;
  primary?: boolean;
  hide?: boolean;
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
  value?: (item: T) => React.ReactNode;
}

export interface ITable<T = unknown> {
  columns: ITableColumn<T>[];
  data?: T[];
  loading?: boolean;
  error?: boolean;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

export interface ITableRow<T = unknown> {
  key: string;
  data: T;
  values: React.ReactNode[];
}

export interface IModal {
  title?: string;
  open?: boolean;
  loading?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export interface IReqListParams {
  page: number;
  search: string;
  orderBy: string;
}

export interface IResList<T = unknown> {
  data: T[];
  pages: number;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
  subscription: ISubscription;
}

export interface ISubscription {
  id: string;
  tokens: string;
  plan: IPlan;
}

export interface IPlan {
  id: string;
  type: string;
  currency: string;
}

export interface ITransaction {
  id: string;
  type: 'REPLENISH' | 'WRITE_OFF';
  amount: number;
  created_at: Date;
}
