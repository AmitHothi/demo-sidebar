import { ReactNode } from 'react';

export type Menu = {
  label: string;
  name: string;
  icon: ReactNode;
  submenu?: Submenu[];
  href: string;
};
