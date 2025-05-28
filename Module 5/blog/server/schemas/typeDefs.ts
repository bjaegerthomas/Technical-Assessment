const typeDefs = `
  type BlogPost {
    _id: ID
    title: String
    author: String
    content: String
    createdAt: String
  }

  input BlogPostInput {
    title: String!
    author: String!
    content: String!
  }

  type Query {
    blogPosts: [BlogPost]!
    blogPost(_id: ID!): BlogPost
  }

  type Mutation {
    addBlogPost(input: BlogPostInput!): BlogPost
    updateBlogPost(_id: ID!, input: BlogPostInput!): BlogPost
    removeBlogPost(_id: ID!): BlogPost
  }
`;

export default typeDefs;
