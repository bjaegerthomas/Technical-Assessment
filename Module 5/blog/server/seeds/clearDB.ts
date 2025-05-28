import { BlogPost } from '../models/index.js';
import process from 'process';

const clearDB = async (): Promise<void> => {
  try {
    await BlogPost.deleteMany({});
    console.log('BlogPost collection cleared.');

  } catch (err: unknown) {
    console.error('Error clearing collections:', err);
    process.exit(1);
  }
};

export default clearDB;
