import { Category } from "../../types";

export const CategoryItem = (props: Category) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};
