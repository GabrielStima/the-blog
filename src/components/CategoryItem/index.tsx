import { Category } from "../../types";
import categoryItemStyle from "./CategoryItem.module.css";

export const CategoryItem = (props: Category) => {
  return (
    <div className={categoryItemStyle.container}>
      <div className={categoryItemStyle.subContainer}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};
