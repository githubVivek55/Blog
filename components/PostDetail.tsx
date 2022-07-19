import moment from "moment";
import React from "react";
import { Post } from "../types/post";

const PostDetail = ({ post }: { post: Post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:p-0">
        <div className="flex items-center mb-8 width-full">
          <img
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.auther.photo.url}
            alt={post.auther.name}
          />
          <p className="inline align-middle text-grey-700 ml-2 text-lg">
            {post.auther.name}
          </p>
        </div>
        <div className="font-medium text-grey-700">
          <span>{moment(post.createdAt).format("MMM DD, yyyy")}</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
