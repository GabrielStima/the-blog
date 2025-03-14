import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { ArticleItem } from "../../components/ArticleItem";
import { getPopularPost } from "../../middleware";
import { CompletePost } from "../../types";
import homeStyle from "./Home.module.css";

export const Home = () => {
  const [popularPost, setPopularPost] = useState<CompletePost[]>([]);

  useEffect(() => {
    getPopularPost().then((response) => setPopularPost(response));
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
          {popularPost.map((article, index) => (
            <ArticleItem key={index} {...article} />
          ))}
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <Footer />
    </>
  );
};
