import db from '../config/connection.js';
import { Profile } from '../models/index.js';
import fs from 'fs';
const profileSeeds = JSON.parse(fs.readFileSync(new URL('./profileData.json', import.meta.url), 'utf-8'));

import cleanDB from './cleanDB.js';

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    await Profile.insertMany(profileSeeds);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error seeding database:', error.message);
    } else {
      console.error('Unknown error seeding database');
    }
    process.exit(1);
  }
};

seedDatabase();
