import { type } from "os";

export interface Post {
  title: string;
  excerpt: string;
  featuredImage: Fimg;
  slug: string;
  auther: Author;
  createdAt: Date;
}

type Fimg = {
  url: string;
};
type Author = {
  name: string;
  photo: Photo;
};
type Photo = {
  url: string;
};
