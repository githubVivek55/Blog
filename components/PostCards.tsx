import React from "react";

type Post = {
  node: Nod;
};
type Nod = {
  title: string;
  excerpt: string;
};
type Prop = {
  post: Post;
};

const PostCards = ({ post }: Prop) => {
  return (
    <div>
      {post.node.title}
      <br />
      {post.node.excerpt}
    </div>
  );
};

export default PostCards;
