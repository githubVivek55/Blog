import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import { Post } from "../types/post";

type Props = {
  categories?: string[];
  slug?: undefined | string;
};

const PostWidgets = ({ categories, slug }: Props) => {
  const [releatedPosts, setReleatedPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: Post[]) =>
        setReleatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setReleatedPosts(result));
    }
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Releated Posts" : "Recent Posts"}
      </h3>
      {releatedPosts.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              className="align-middle rounded-full"
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidgets;
