import { useRouter } from "next/router";
import React from "react";
import { PostCard } from "../../components";
import Categories from "../../components/Categories";
import { getCategories, getCategoryPost } from "../../services";
import { Post } from "../../types/post";

type PostNode = {
  node: Post;
};

const CategoryPost = ({ posts }: { posts: PostNode[] }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node}></PostCard>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;

export async function getStaticProps({ params }: any) {
  const posts = await getCategoryPost(params.slug);
  return {
    props: { posts },
  };
}
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
