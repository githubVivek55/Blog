import moment from "moment";
import React from "react";
import { Post, TypeObj } from "../types/post";

const PostDetail = ({ post }: { post: Post }) => {
  const getContentFragment = (
    index: number,
    text: string | any[],
    obj: any,
    type: string
  ) => {
    let modifiedText: any = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
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
          <div className="flex items-center mb-4 lg:mb-0 w-full">
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
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post?.content?.raw.children.map((typeObj: TypeObj, index: number) => {
          const children = typeObj.children.map(
            (item: any, itemIndex: number) =>
              getContentFragment(itemIndex, item.text, item, "")
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
