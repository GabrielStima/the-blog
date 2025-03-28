import axios from "axios";
import { Post, CompletePost, Category, Author } from "../types";

export const getPopularPost = async (): Promise<CompletePost[]> => {
  const popularPosts = await axios.get<Post[]>(
    "http://localhost:3001/popularPosts"
  );
  const temp = await Promise.all(
    popularPosts.data.map(async (item: Post) => {
      const { categoryId, authorId } = item;
      const author = await getAuthorById(authorId);
      const category = await getCategoryById(categoryId);

      return { ...item, author, category };
    })
  );

  return temp;
};

export const getAuthorById = async (authorId: string): Promise<Author> => {
  const response = await axios.get(
    "http://localhost:3001/authors?id=" + authorId
  );
  return response.data[0];
};

export const getCategoryById = async (
  categoryId: string
): Promise<Category> => {
  const response = await axios.get(
    "http://localhost:3001/categories?id=" + categoryId
  );
  return response.data[0];
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(
    "http://localhost:3001/categories"
  );

  return response.data;
};

export const getPostById = async (id: string): Promise<CompletePost> => {
  const post = await axios.get<Post[]>("http://localhost:3001/posts?id=" + id);

  const temp = await Promise.all(
    post.data.map(async (item: Post) => {
      const { categoryId, authorId } = item;
      const author = await getAuthorById(authorId);
      const category = await getCategoryById(categoryId);

      return { ...item, author, category };
    })
  );

  return temp[0];
};

export const getPostsByCategory = async (
  idCategory: string
): Promise<CompletePost[]> => {
  const posts = await axios.get<Post[]>(
    "http://localhost:3001/posts?categoryId=" + idCategory
  );

  const temp = await Promise.all(
    posts.data.map(async (item: Post) => {
      const { categoryId, authorId } = item;
      const author = await getAuthorById(authorId);
      const category = await getCategoryById(categoryId);

      return { ...item, author, category };
    })
  );

  return temp;
};
