import { request, gql } from "graphql-request";

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            auther {
              bio
              name
              id
              photo {
                url
              }
              posts {
                categories {
                  name
                  slug
                }
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetais(){
      posts(
        orderBy: createdAt_ASC
        last: 3
        ){
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetais($slug: string!, $categories: [string!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};
