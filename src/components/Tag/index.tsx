import { ReactNode } from "react";
import tagStyle from "./Tag.module.css";

export const Tag = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <span className={`${tagStyle.tag} ${className}`}>{children}</span>;
};
