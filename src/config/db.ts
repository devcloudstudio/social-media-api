import { connect } from "mongoose";

const runDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (err) {
    console.log(err.message);
  }
};

export default runDB;
