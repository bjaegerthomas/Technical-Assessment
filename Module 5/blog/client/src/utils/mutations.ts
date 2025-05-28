import { gql } from '@apollo/client';

export const ADD_BLOGPOST = gql`
  mutation addBlogPost($input: AddBlogPostArgs!) {
    addBlogPost(input: $input) {
      _id
      title
      author
      content
      createdAt
      }
    }
  }
`;

export const UPDATE_BLOGPOST = gql`
  mutation updateBlogPost($id: ID!, $input: UpdateBlogPostArgs!) {
    updateBlogPost(id: $id, input: $input) {
      _id
      title
      author
      content
      createdAt
    }
  }
`;

export const REMOVE_BLOGPOST = gql`
  mutation removeBlogPost($blogPostId: ID!) {
    removeBlogPost(blogPostId: $blogPostId) {
      _id
      title
      author
      content
      createdAt
    }
  }
`;
