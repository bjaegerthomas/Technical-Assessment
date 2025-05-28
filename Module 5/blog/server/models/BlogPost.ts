import { Schema, model, Document } from 'mongoose';

interface IBlogPost extends Document {
  title: string;
  author: string;
  content: string;
  createdAt: Date;
}

const blogPostSchema = new Schema<IBlogPost>(
  {
    title: {
      type: String,
      trim: true,
    },
    author:{
        type: String,
        trim: true,
    },
    content: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
},
);

const BlogPost = model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
