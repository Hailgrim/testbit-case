import { ReactNode } from 'react';

export type SortDirection = 'ASC' | 'DESC';

export interface ITableColumn<T = unknown> {
  name?: string;
  key: T extends Object ? Partial<keyof T> | String : string;
  primary?: boolean;
  hide?: boolean;
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
  value?: (item: T) => ReactNode;
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
  values: ReactNode[];
}

export interface IPaginationItem {
  key: string | number;
  value: number;
}

export interface IModal {
  title?: string;
  open?: boolean;
  loading?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
