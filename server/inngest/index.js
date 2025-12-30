// // import connectDB from "../configs/db.js";
// import { Inngest } from "inngest";
// import User from "../models/User.js";
// import "dotenv/config";
// import connectDB from "../configs/db.js";
// import mongoose from "mongoose";

// await connectDB();


// // await connectDB();
// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "circlehub-app" });

// // Inngest Function to save user data to a database
// const syncUserCreation = inngest.createFunction(
//     {id: 'sync-user-from-clerk'},
//     {event: 'clerk/user.created'},
//     async ({event}) => {
//         const {id, first_name, last_name, email_addresses, image_url} = event.data
//         let username = email_addresses[0].email_address.split('@')[0]

//         // CHECK AVAILABLITY OF USERNAME
//         const user = await User.findOne({username})

//         if(user){
//             username = username + Math.floor(Math.random() * 10000)
//         }

//         const userData = {
//             _id: id,
//             email: email_addresses[0].email_address,
//             full_name: first_name + " " + last_name,
//             profile_picture: image_url, 
//             username
//         }
//         await User.create(userData)
//     }
// )

// // Inngest Function to update user data in database
// const syncUserUpdation = inngest.createFunction(
//     {id: 'update-user-from-clerk'},
//     {event: 'clerk/user.updated'},
//     async ({event}) => {
//         const {id, first_name, last_name, email_addresses, image_url} = event.data

//         const updatedUserData = {
//             email: email_addresses[0].email_address,
//             full_name: first_name + " " + last_name,
//              profile_picture: image_url, 
//         }
//         await User.findByIdAndUpdate(id, updatedUserData)
//     }
// )

// // Inngest Function to delete user data in database
// const syncUserDeletion = inngest.createFunction(
//     {id: 'delete-user-with-clerk'},
//     {event: 'clerk/user.deleted'},
//     async ({event}) => {
//         const {id} = event.data

//         await User.findByIdAndDelete(id)
       
//     }
// )





// // Create an empty array where we'll export future Inngest functions
// export const functions = [
//     syncUserCreation,
//     syncUserUpdation,
//     syncUserDeletion
// ];

import "dotenv/config";
import mongoose from "mongoose";
import { Inngest } from "inngest";
import User from "../models/User.js";

/* ----------------------------------------
   SAFE MONGODB CONNECTION FOR SERVERLESS
---------------------------------------- */

let isConnected = false;

const connectInngestDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in environment variables");
  }

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "circlehub", // 🔥 FORCE DB NAME
  });

  isConnected = true;
  console.log("Inngest MongoDB connected:", mongoose.connection.name);
};

/* ----------------------------------------
   INNGEST CLIENT
---------------------------------------- */

export const inngest = new Inngest({
  id: "circlehub-app",
});

/* ----------------------------------------
   USER CREATED
---------------------------------------- */

const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectInngestDB(); // 🔥 IMPORTANT

    const {
      id,
      first_name,
      last_name,
      email_addresses,
      image_url,
    } = event.data;

    let username = email_addresses[0].email_address.split("@")[0];

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      username = `${username}${Math.floor(Math.random() * 10000)}`;
    }

    await User.create({
      _id: id,
      email: email_addresses[0].email_address,
      full_name: `${first_name} ${last_name}`,
      profile_picture: image_url,
      username,
    });
  }
);

/* ----------------------------------------
   USER UPDATED
---------------------------------------- */

const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    await connectInngestDB();

    const {
      id,
      first_name,
      last_name,
      email_addresses,
      image_url,
    } = event.data;

    await User.findByIdAndUpdate(id, {
      email: email_addresses[0].email_address,
      full_name: `${first_name} ${last_name}`,
      profile_picture: image_url,
    });
  }
);

/* ----------------------------------------
   USER DELETED
---------------------------------------- */

const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectInngestDB();

    const { id } = event.data;
    await User.findByIdAndDelete(id);
  }
);

/* ----------------------------------------
   EXPORT FUNCTIONS
---------------------------------------- */

export const functions = [
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
];
