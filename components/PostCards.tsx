import moment from "moment";
import Link from "next/link";
import React from "react";
import { Post } from "../types/post";

type Prop = {
  post: Post;
};

const PostCards = ({ post }: Prop) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt="image"
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
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
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:p-5 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            continue reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCards;
