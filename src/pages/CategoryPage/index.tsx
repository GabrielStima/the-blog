import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { CompletePost, Category } from "../../types";
import { getCategoryById, getPostsByCategory } from "../../middleware";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import categoryStyle from "./Category.module.css";
import { ArticleItem } from "../../components/ArticleItem";

export const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category>();
  const [posts, setPosts] = useState<CompletePost[]>([]);

  useEffect(() => {
    if (!id) return;
    getCategoryById(id).then((data) => setCategory(data));
    getPostsByCategory(id).then((data) => setPosts(data));
  }, [id]);

  return (
    <>
      <Navbar />
      <main className={categoryStyle.container}>
        <div className={categoryStyle.categoryHeader}>
          <div className={categoryStyle.categoryFade} />
          <h1 className={categoryStyle.categoryTitle}>{category?.name}</h1>
        </div>
        <div className={categoryStyle.postsContainer}>
          {posts.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
