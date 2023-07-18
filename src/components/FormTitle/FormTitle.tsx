import { ReactNode } from 'react';

import css from './FormTitle.module.css';
export const FormTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className={css.FormTitle}>{children}</h2>;
};

export default FormTitle;
