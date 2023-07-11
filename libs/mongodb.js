import mongoose from "mongoose";
const connectMongoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nextCrudOperation:lsMpE3WwoHWH50da@cluster0.zr5yxev.mongodb.net/"
    );
    console.log("mongoose Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
