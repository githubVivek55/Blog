import type { NextPage } from "next";
import Head from "next/head";
import { Cetegories, PostCard, PostWidgets } from "../components";
import Image from "next/image";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learn react testing",
  },
  {
    title: "React with next",
    excerpt: "Learn react with next js",
  },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Viki Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets />
            <Cetegories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
