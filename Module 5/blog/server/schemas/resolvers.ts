import { BlogPost } from '../models/index.js';

interface BlogPostArgs {
  blogPostId: string;
}

interface AddBlogPostArgs {
  input:{
    title: string;
    author: string;
    content: string;
  }
}

interface UpdateBlogPostArgs {
  blogPostId: string;
  input: {
    title?: string;
    author?: string;
    content?: string;
  };
}

const resolvers = {
  Query: {
    blogPosts: async () => {
      return await BlogPost.find().sort({ createdAt: -1 });
    },
    blogPost: async (_parent: unknown, { blogPostId }: BlogPostArgs) => {
      return await BlogPost.findOne({ _id: blogPostId });
    },
  },
  Mutation: {
    addBlogPost: async (_parent: unknown, { input }: AddBlogPostArgs) => {
        const blogPost = await BlogPost.create({ ...input });
        return blogPost;
    },
    removeBlogPost: async (_parent: unknown, { blogPostId }: BlogPostArgs) => {
      return await BlogPost.findOneAndDelete({ _id: blogPostId });
    },
    updateBlogPost: async (_parent: unknown, { blogPostId, input }: UpdateBlogPostArgs) => {
      return await BlogPost.findOneAndUpdate(
        { _id: blogPostId },
        { $set: { ...input } },
        { new: true }
      );
    },
  },
};

export default resolvers;
