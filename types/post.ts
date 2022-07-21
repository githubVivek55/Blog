import { type } from "os";

export interface Category {
  name: string;
  slug: string;
}
export interface Post {
  title: string;
  excerpt: string;
  featuredImage: Fimg;
  slug: string;
  auther: Author;
  createdAt: Date;
  categories?: Category[];
  content?: Raw1;
}

type Raw1 = {
  raw: Raw2;
};

type Raw2 = {
  children: TypeObj[];
  type: string;
};
export type TypeObj = {
  children: Item[];
  type: string;
};
type Item = {
  test: string;
};
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
