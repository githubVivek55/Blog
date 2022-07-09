import React from "react";

type Post = {
  title: string;
  excerpt: string;
};
type Prop = {
  post: Post;
};

const PostCards = ({ post }: Prop) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
};

export default PostCards;
