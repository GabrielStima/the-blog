import { Category } from "../../types";
import { Link } from "react-router";
import categoryItemStyle from "./CategoryItem.module.css";

export const CategoryItem = (props: Category) => {
  return (
    <Link to={`/category/${props.id}`} className={categoryItemStyle.link}>
      <div className={categoryItemStyle.container}>
        <div className={categoryItemStyle.subContainer}>
          <p>{props.name}</p>
        </div>
      </div>
    </Link>
  );
};
