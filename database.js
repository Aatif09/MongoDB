import mongoose from 'mongoose';//npm i mongoose
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(`mongodb+srv://root:root@jamshed.174cw.mongodb.net/`);
    const conn = await mongoose.connect(process.env.MONGODB_CON);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
export default connectDB;