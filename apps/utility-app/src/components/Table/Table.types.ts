import React from 'react';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  key: string | null;
  direction: SortDirection;
}

export type FilterConfig = Record<string, string>;

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  render?: (value: any, row?: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey?: keyof T | string;
  className?: string;
  striped?: boolean;
  hover?: boolean;
  compact?: boolean;
  onRowClick?: (row: T) => void;
}

export type { React };
