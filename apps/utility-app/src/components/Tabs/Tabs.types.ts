import React from 'react';

export type TabItem = {
  key: string;
  label: string;
  content?: React.ReactNode;
};

export interface TabsProps {
  items: TabItem[];
  className?: string;
}

export type { React };
