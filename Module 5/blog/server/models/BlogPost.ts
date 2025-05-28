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
    {
    _id: false,
    toJSON: { getters: true },
    toObject: { getters: true },
    timestamps: true,
    }
);

const BlogPost = model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
