import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { ArticleItem } from "../../components/ArticleItem";
import { CategoryItem } from "../../components/CategoryItem";
import { getPopularPost, getCategories } from "../../middleware";
import { Category, CompletePost } from "../../types";
import homeStyle from "./Home.module.css";

export const Home = () => {
  const [popularPost, setPopularPost] = useState<CompletePost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getPopularPost().then((response) => setPopularPost(response));
    getCategories().then((response) => setCategories(response));
  }, []);

  return (
    <>
      <Navbar />
      <main className={homeStyle.container}>
        <section className={homeStyle.sectionOne}>
          <span className={homeStyle.sectionBackgroundSubColor} />
          <div className={homeStyle.sectionOneInfo}>
            <Tag>Our Blogs</Tag>
            <h1>Navigate the Seas of Development</h1>
          </div>
        </section>
        <section className={homeStyle.sectionTwo}>
          <h2>Popular Post</h2>
          <div className={homeStyle.popularPostContainer}>
            {popularPost.map((article) => (
              <ArticleItem key={article.id} {...article} />
            ))}
          </div>
        </section>
        <section className={homeStyle.sectionThree}>
          <h2>Explore Categories</h2>
          <div className={homeStyle.categoriesContainer}>
            {categories.map((category) => (
              <CategoryItem key={category.id} {...category} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
