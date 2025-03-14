import { Tag } from "../Tag";
import { CompletePost } from "../../types";
import articleItemStyle from "./ArticleItem.module.css";

export const ArticleItem = (props: CompletePost) => {
  return (
    <div className={articleItemStyle.container}>
      <Tag>{props.category.name}</Tag>
      <div>
        <h3>{props.title}</h3>
        <div>
          <div>
            <span></span>
            <p>By {props.author.name}</p>
          </div>
          <div>{props.createdAt}</div>
        </div>
      </div>
    </div>
  );
};
