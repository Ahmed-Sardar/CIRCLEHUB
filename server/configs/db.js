// import mongoose from "mongoose";

// const connectDB = async () => 
// {
//     try 
//     {
//         await mongoose.connect(process.env.MONGODB_URL, {
//   dbName: "circlehub"
// });

//         return console.log("MongoDB connected", mongoose.connection.name)
//     } catch (error) 
//     {
//         console.log(error.message)
//     }
// }

// export default connectDB

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "circlehub",
    });

    console.log("MongoDB connected:", mongoose.connection.name);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
