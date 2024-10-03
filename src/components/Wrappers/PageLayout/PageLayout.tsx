import { FC, ReactNode } from "react";
import { NavLayout } from "../NavLayout";
import styles from "./PageLayout.module.scss";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={`${styles.wrap} mainWrap`}>
      <NavLayout>{children}</NavLayout>
    </div>
  );
};
