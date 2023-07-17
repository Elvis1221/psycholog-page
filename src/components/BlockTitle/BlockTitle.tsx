import { ReactNode } from 'react';

import css from './BlockTitle.module.css';
export const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className={css.BlockTitle}>{children}</h3>;
};

export default BlockTitle;
