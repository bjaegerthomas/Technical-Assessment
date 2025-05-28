import { gql } from '@apollo/client';

export const QUERY_BLOGPOSTS = gql`
  query getBlogPosts($blogPostId: ID!) {
    blogPosts(blogPostId: $blogPostId) {
      _id
      title
      author
      content
      createdAt
    }
  }`;

export const QUERY_SINGLE_BLOGPOST = gql`
  query getBlogPost($blogPostId: ID!) {
    thought(blogPostId: $blogPostId) {
      _id
      title
      author
      content
      createdAt
    }
  }`;
