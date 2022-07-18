import React from "react";
import { PostWidgets } from "../../components";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostDetail from "../../components/PostDetail";

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
