import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Tag } from "../Tag";
import { CompletePost } from "../../types";
import defaultImage from "../../assets/images/defaultImage.jpg";
import userImage from "../../assets/images/user.jpg";
import articleItemStyle from "./ArticleItem.module.css";

export const ArticleItem = (props: CompletePost) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date(props.createdAt));
  }, []);

  return (
    <Link className={articleItemStyle.link} to={`/post/${props.id}`}>
      <div className={articleItemStyle.container}>
        <img
          className={articleItemStyle.image}
          src={defaultImage}
          alt="Default Image"
        />
        <Tag className={articleItemStyle.tag}>{props.category.name}</Tag>
        <div className={articleItemStyle.infoContainer}>
          <h3>{props.title}</h3>
          <div className={articleItemStyle.articleInfo}>
            <div className={articleItemStyle.authorContainer}>
              <img src={userImage} alt="Author Image" />
              <p>By {props.author.name}</p>
            </div>
            <div>
              {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
