// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     _id: {type: String, required: true},
//     email: {type: String, required: true},
//     full_name: {type: String, required: true},
//     username: {type: String, unique: true},
//     bio: {type: String, default: 'Hey there! I am using CircleHub'},
//     profile_picture: {type: String, default:''},
//     cover_photo: {type: String, default:''},
//     location: {type: String, default:''},
//     followers: {type: String, ref:'User'},
//     following: {type: String, ref:'User'},
//     connections: {type: String, ref:'User'},
// },{timestamps: true, minimize: false})

// const User = mongoose.model('User', userSchema)

// export default User





import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Clerk userId
  email: { type: String, required: true },
  full_name: { type: String, default: "" },
  username: { type: String, unique: true, sparse: true },
  bio: { type: String, default: "Hey there! I am using CircleHub" },
  profile_picture: { type: String, default: "" },
  cover_photo: { type: String, default: "" },
  location: { type: String, default: "" },
  followers: [{ type: String, ref: "User" }],
  following: [{ type: String, ref: "User" }],
  connections: [{ type: String, ref: "User" }],
}, { timestamps: true });

export default mongoose.model("User", userSchema);





// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     clerkId: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     email: {
//       type: String,
//       required: true,
//     },

//     username: {
//       type: String,
//       unique: true,
//       sparse: true,
//     },

//     full_name: {
//       type: String,
//       required: true,
//     },

//     bio: {
//       type: String,
//       default: "",
//     },

//     location: {
//       type: String,
//       default: "",
//     },

//     profile_picture: {
//       type: String,
//       default: "",
//     },

//     cover_photo: {
//       type: String,
//       default: "",
//     },

//     followers: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],

//     following: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],

//     posts: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Post",
//       },
//     ],
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);
