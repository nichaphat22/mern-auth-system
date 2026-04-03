import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/node-app`)
    console.log('Mongodb connected successfully');
    
  } catch (error) {
    console.log('Mongodb connection error');
    
  }
}

export default connectDB