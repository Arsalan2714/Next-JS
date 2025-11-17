import mongoose from "mongoose";

const connectDb = async () => {
  // if already connected, do nothing
  if (mongoose.connections[0]?.readyState) {
    return;
  }
  // connect using env var
  await mongoose.connect(process.env.MONGO_URI, {
    // optional: add recommended options if needed
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
};

export default connectDb;