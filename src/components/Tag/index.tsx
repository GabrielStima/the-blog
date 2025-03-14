import { ReactNode } from "react";
import tagStyle from "./Tag.module.css";

export const Tag = ({ children }: { children: ReactNode }) => {
  return <span className={tagStyle.tag}>{children}</span>;
};
