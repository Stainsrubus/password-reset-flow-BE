import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

export default mongoose;
