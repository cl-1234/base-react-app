import { ReactElement } from 'react';

export interface RouterConfigType {
  path: string;
  component: ReactElement;
  permissonKey: string;
  children?: RouterConfigType[];
}
