export interface Post {
  id: string;
  title: string;
  text: string;
  createdAt: number;
  readTime: string;
  categoryId: string;
  authorId: string;
}
export interface Author {
  id: string;
  name: string;
  description: string;
  facebook: string;
  youtube: string;
  instagram: string;
}
export interface Category {
  id: string;
  name: string;
}
export interface CompletePost extends Omit<Post, "authorId" | "categoryId"> {
  author: Author;
  category: Category;
}
