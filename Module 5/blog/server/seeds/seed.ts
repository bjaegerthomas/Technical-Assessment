import db from '../config/connection.js';
import { BlogPost } from '../models/index.js';
import clearDB from './clearDB.js';

import blogPostData from './blogPostData.json' assert { type: 'json' };

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await clearDB();

    // bulk create each model
    await BlogPost.insertMany(blogPostData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
