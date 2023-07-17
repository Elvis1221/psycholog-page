import { ReactNode } from 'react';

import css from './BlockText.module.css';
export const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className={css.BlockText}>{children}</p>;
};

export default BlockText;
