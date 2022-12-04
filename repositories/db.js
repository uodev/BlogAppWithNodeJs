import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => console.log("connected to database"))
    .catch((e) => console.log(e));
};

export default connectDatabase;
