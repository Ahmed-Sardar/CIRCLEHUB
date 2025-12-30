// // // import imagekit from "../configs/imageKit.js";
// // // import User from "../models/User.js";
// // // import fs from 'fs';

// // // // GET USER DATA USING USER ID

// // // export const getUserData = async (req, res) => {
// // //     try {
// // //         const {userId} = req.auth();
// // //         const user = await User.findById(userId)
// // //         if(!user){
// // //             return res.json({success: false , message: "User not found"})
// // //         }
// // //         res.json({success: true , user})
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({success:false, message: error.message})
// // //     }
// // // }

// // // // UPDATE USER DATA

// // // export const updateUserData = async (req, res) => {
// // //     try {
// // //         const {userId} = req.auth();
// // //         let {username, bio , location, full_name} = req.body;

// // //         const tempUser = await User.findById(userId)

// // //         !username && (username = tempUser.username)

// // //         if(tempUser.username !== username){
// // //             const user = User.findOne({username})
// // //             if(user){
// // //                 // IF USERNAME ALREADY TAKEN
// // //                 username = tempUser.username
// // //             }
// // //         }

// // //         const updatedData = {
// // //             username,
// // //             bio,
// // //             location,
// // //             full_name
// // //         }

// // //         const profile = req.files.profile && req.files.profile[0]
// // //         const cover = req.files.cover && req.files.cover[0]

// // //         // if(profile){
// // //         //     const buffer = fs.readFileSync(profile.path);
// // //         //     const responce = await imagekit.upload({
// // //         //         file: buffer,
// // //         //         fileName: profile.originalname,
// // //         //     })

// // //         //     const url = imagekit.url({
// // //         //         path: responce.filePath,
// // //         //         transformation: [
// // //         //             {quality: 'auto'},
// // //         //             {format: 'webp'},
// // //         //             {width: '512'}
// // //         //         ]
// // //         //     })
// // //         //     updatedData.profile_picture = url;
// // //         // }

// // //         if (profile) {
// // //   const uploadResponse = await imagekit.files.upload({
// // //     file: fs.readFileSync(profile.path),
// // //     fileName: profile.originalname,
// // //     folder: "/profile",
// // //   });

// // // //         const uploadResponse = await imagekit.upload({
// // // //   file: fs.readFileSync(profile.path),
// // // //   fileName: profile.originalname,
// // // //   folder: "/profile",
// // // // });

// // //   fs.unlinkSync(profile.path);

// // //   const url = imagekit.url({
// // //     path: uploadResponse.filePath,
// // //     transformation: [
// // //       { quality: "auto" },
// // //       { format: "webp" },
// // //       { width: "512" },
// // //     ],
// // //   });

// // //   updatedData.profile_picture = url;
// // // }


// // //         if(cover){
// // //             const buffer = fs.readFileSync(cover.path);
// // //             const responce = await imagekit.upload({
// // //                 file: buffer,
// // //                 fileName: profile.originalname,
// // //             })

// // //             const url = imagekit.url({
// // //                 path: responce.filePath,
// // //                 transformation: [
// // //                     {quality: 'auto'},
// // //                     {format: 'webp'},
// // //                     {width: '580'}
// // //                 ]
// // //             })
// // //             updatedData.cover_photo = url;
// // //         }

// // //         const user = await User.findByIdAndUpdate(userId, updatedData, {new: true})
// // //         res.json({success: true, user, message: "profile updated successfully"})
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({success:false, message: error.message})
// // //     }
// // // }

// // // // FIND USERS BY USING USERNAME, EMAIL, LOCATION, NAME

// // // export const discoverUsers = async (req, res) => {
// // //     try {
// // //         const {userId} = req.auth();
// // //         const {input} = req.body;

// // //         const allUsers = await User.find(
// // //             {
// // //                 $or: [
// // //                     {username:  new RegExp(input, 'i')},
// // //                     {email:  new RegExp(input, 'i')},
// // //                     {full_name:  new RegExp(input, 'i')},
// // //                     {location:  new RegExp(input, 'i')},

// // //                 ]
// // //         }
// // //     )

// // //         const filteredUsers = allUsers.filter(user => user._id !== userId);

// // //          res.json({success:true, users: filteredUsers})


// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({success:false, message: error.message})
// // //     }
// // // }

// // // // FOLLOW  USERS

// // // export const followUser = async (req, res) => {
// // //     try {
// // //         const {userId} = req.auth();
// // //         const {input} = req.body;

// // //         const user = await User.findById(userId)

// // //         if(user.following.includes(id)){
// // //             return res.json({success:false, message:"You are already following this user"})
// // //         }
// // //         user.following.push(id);
// // //         await user.save()

// // //         const toUser = await User.findById(id)
// // //         toUser.followers.push(userId)
// // //         await toUser.save()

// // //         res.json({success:true, message: "You started following the user"})
       
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({success:false, message: error.message})
// // //     }
// // // }

// // // // UNFOLLOW USERS

// // // export const unFollowUser = async (req, res) => {
// // //     try {
// // //         const {userId} = req.auth();
// // //         const {id} = req.body;

// // //         const user = await User.findById(userId)

// // //         user.following = user.following.filter(user=> user !== id);
// // //         await user.save()

// // //         const toUser = await User.findById(id)
// // //         toUser.followers = toUser.followers.filter(user=> user !== userId);
// // //         await toUser.save()
        
// // //         res.json({success:true, message: "You unfollowed the user"})
       
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({success:false, message: error.message})
// // //     }
// // // }


// // import imagekit from "../configs/imageKit.js";
// // import User from "../models/User.js";
// // import fs from "fs";

// // /* ================================
// //    GET USER DATA
// // ================================ */
// // export const getUserData = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();
// //     const user = await User.findById(userId);

// //     if (!user) {
// //       return res.json({ success: false, message: "User not found" });
// //     }

// //     res.json({ success: true, user });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // /* ================================
// //    UPDATE USER DATA
// // ================================ */
// // export const updateUserData = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();
// //     let { username, bio, location, full_name } = req.body;

// //     const existingUser = await User.findById(userId);
// //     if (!existingUser) {
// //       return res.json({ success: false, message: "User not found" });
// //     }

// //     // Username validation
// //     if (!username) username = existingUser.username;

// //     if (existingUser.username !== username) {
// //       const userExists = await User.findOne({ username });
// //       if (userExists) username = existingUser.username;
// //     }

// //     const updatedData = {
// //       username,
// //       bio,
// //       location,
// //       full_name,
// //     };

// //     const profile = req.files?.profile?.[0];
// //     const cover = req.files?.cover?.[0];

// //     /* ---------- PROFILE IMAGE ---------- */
// //     if (profile) {
// //       const uploadResponse = await imagekit.upload({
// //         file: fs.readFileSync(profile.path),
// //         fileName: profile.originalname,
// //         folder: "/profile",
// //       });

// //       fs.unlinkSync(profile.path);

// //       updatedData.profile_picture = imagekit.url({
// //         path: uploadResponse.filePath,
// //         transformation: [
// //           { quality: "auto" },
// //           { format: "webp" },
// //           { width: "512" },
// //         ],
// //       });
// //     }

// //     /* ---------- COVER IMAGE ---------- */
// //     if (cover) {
// //       const uploadResponse = await imagekit.upload({
// //         file: fs.readFileSync(cover.path),
// //         fileName: cover.originalname,
// //         folder: "/cover",
// //       });

// //       fs.unlinkSync(cover.path);

// //       updatedData.cover_photo = imagekit.url({
// //         path: uploadResponse.filePath,
// //         transformation: [
// //           { quality: "auto" },
// //           { format: "webp" },
// //           { width: "580" },
// //         ],
// //       });
// //     }

// //     const user = await User.findByIdAndUpdate(userId, updatedData, {
// //       new: true,
// //     });

// //     res.json({
// //       success: true,
// //       user,
// //       message: "Profile updated successfully",
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // /* ================================
// //    DISCOVER USERS
// // ================================ */
// // export const discoverUsers = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();
// //     const { input } = req.body;

// //     const users = await User.find({
// //       $or: [
// //         { username: new RegExp(input, "i") },
// //         { email: new RegExp(input, "i") },
// //         { full_name: new RegExp(input, "i") },
// //         { location: new RegExp(input, "i") },
// //       ],
// //     });

// //     const filteredUsers = users.filter(
// //       (user) => user._id.toString() !== userId
// //     );

// //     res.json({ success: true, users: filteredUsers });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // /* ================================
// //    FOLLOW USER
// // ================================ */
// // export const followUser = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();
// //     const { id } = req.body;

// //     const user = await User.findById(userId);
// //     const toUser = await User.findById(id);

// //     if (!user || !toUser) {
// //       return res.json({ success: false, message: "User not found" });
// //     }

// //     if (user.following.includes(id)) {
// //       return res.json({
// //         success: false,
// //         message: "You are already following this user",
// //       });
// //     }

// //     user.following.push(id);
// //     toUser.followers.push(userId);

// //     await user.save();
// //     await toUser.save();

// //     res.json({ success: true, message: "User followed successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // /* ================================
// //    UNFOLLOW USER
// // ================================ */
// // export const unFollowUser = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();
// //     const { id } = req.body;

// //     const user = await User.findById(userId);
// //     const toUser = await User.findById(id);

// //     if (!user || !toUser) {
// //       return res.json({ success: false, message: "User not found" });
// //     }

// //     user.following = user.following.filter(
// //       (uid) => uid.toString() !== id
// //     );

// //     toUser.followers = toUser.followers.filter(
// //       (uid) => uid.toString() !== userId
// //     );

// //     await user.save();
// //     await toUser.save();

// //     res.json({ success: true, message: "User unfollowed successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// import imagekit from "../configs/imageKit.js";
// import User from "../models/User.js";
// import fs from "fs";

// /* ================================
//    GET USER DATA
// ================================ */
// export const getUserData = async (req, res) => {
//   try {
//     const { userId } = req.auth(); // Clerk ID

//     const user = await User.findOne({ clerkId: userId });

//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     res.json({ success: true, user });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // export const getUserData = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();

// //     let user = await User.findOne({ clerkId: userId });

// //     // 🔥 AUTO CREATE USER
// //     if (!user) {
// //       user = await User.create({
// //         clerkId: userId,
// //         username: "",
// //         bio: "",
// //         location: "",
// //         full_name: "",
// //         followers: [],
// //         following: [],
// //         posts: [],
// //       });
// //     }

// //     res.json({ success: true, user });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// /* ================================
//    UPDATE USER DATA
// ================================ */
// export const updateUserData = async (req, res) => {
//   try {
//     const { userId } = req.auth(); // Clerk ID
//     let { username, bio, location, full_name } = req.body;

//     const existingUser = await User.findOne({ clerkId: userId });
//     if (!existingUser) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     /* ---------- USERNAME CHECK ---------- */
//     if (!username) username = existingUser.username;

//     if (existingUser.username !== username) {
//       const usernameTaken = await User.findOne({ username });
//       if (usernameTaken) {
//         username = existingUser.username;
//       }
//     }

//     const updatedData = {
//       username,
//       bio,
//       location,
//       full_name,
//     };

//     const profile = req.files?.profile?.[0];
//     const cover = req.files?.cover?.[0];

//     /* ---------- PROFILE IMAGE ---------- */
//     if (profile) {
//       const uploadResponse = await imagekit.upload({
//         file: fs.readFileSync(profile.path),
//         fileName: profile.originalname,
//         folder: "/profile",
//       });

//       fs.unlinkSync(profile.path);

//       updatedData.profile_picture = imagekit.url({
//         path: uploadResponse.filePath,
//         transformation: [
//           { quality: "auto" },
//           { format: "webp" },
//           { width: "512" },
//         ],
//       });
//     }

//     /* ---------- COVER IMAGE ---------- */
//     if (cover) {
//       const uploadResponse = await imagekit.upload({
//         file: fs.readFileSync(cover.path),
//         fileName: cover.originalname,
//         folder: "/cover",
//       });

//       fs.unlinkSync(cover.path);

//       updatedData.cover_photo = imagekit.url({
//         path: uploadResponse.filePath,
//         transformation: [
//           { quality: "auto" },
//           { format: "webp" },
//           { width: "580" },
//         ],
//       });
//     }

//     const user = await User.findOneAndUpdate(
//       { clerkId: userId },
//       updatedData,
//       { new: true }
//     );

//     res.json({
//       success: true,
//       user,
//       message: "Profile updated successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// /* ================================
//    DISCOVER USERS
// ================================ */
// export const discoverUsers = async (req, res) => {
//   try {
//     const { userId } = req.auth();
//     const { input } = req.body;

//     const users = await User.find({
//       $or: [
//         { username: new RegExp(input, "i") },
//         { email: new RegExp(input, "i") },
// //         { full_name: new RegExp(input, "i") },
// //         { location: new RegExp(input, "i") },
// //       ],
// //     });

// //     const filteredUsers = users.filter(
// //       (user) => user.clerkId !== userId
// //     );

// //     res.json({ success: true, users: filteredUsers });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // /* ================================
// //    FOLLOW USER
// // ================================ */
// // export const followUser = async (req, res) => {
// //   try {
// //     const { userId } = req.auth(); // Clerk ID
// //     const { id } = req.body;       // MongoDB _id of target user

// //     const user = await User.findOne({ clerkId: userId });
// //     const toUser = await User.findById(id);

// //     if (!user || !toUser) {
// //       return res.json({ success: false, message: "User not found" });
// //     }

// //     if (user.following.includes(id)) {
// //       return res.json({
// //         success: false,
// //         message: "You are already following this user",
// //       });
// //     }

// //     user.following.push(id);
// //     toUser.followers.push(user._id);

// //     await user.save();
// //     await toUser.save();

// //     res.json({ success: true, message: "User followed successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // /* ================================
// //    UNFOLLOW USER
// // ================================ */
// // export const unFollowUser = async (req, res) => {
// //   try {
// //     const { userId } = req.auth();
// //     const { id } = req.body;

// //     const user = await User.findOne({ clerkId: userId });
// //     const toUser = await User.findById(id);

// //     if (!user || !toUser) {
// //       return res.json({ success: false, message: "User not found" });
// //     }

// //     user.following = user.following.filter(
// //       (uid) => uid.toString() !== id
// //     );

// //     toUser.followers = toUser.followers.filter(
// //       (uid) => uid.toString() !== user._id.toString()
// //     );

// //     await user.save();
// //     await toUser.save();

// //     res.json({ success: true, message: "User unfollowed successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };
// import imagekit from "../configs/imageKit.js";
// import User from "../models/User.js";
// import fs from "fs";

// /* ================================
//    GET USER DATA (AUTO CREATE)
// ================================ */
// // export const getUserData = async (req, res) => {
// //   try {
// //     const { userId } = req.auth(); // Clerk ID

// //     let user = await User.findOne({ clerkId: userId });

// //     // 🔥 AUTO-CREATE USER IF NOT EXISTS
// //     if (!user) {
// //       user = await User.create({
// //         clerkId: userId,
// //         username: "",
// //         full_name: "",
// //         bio: "",
// //         location: "",
// //         profile_picture: "",
// //         cover_photo: "",
// //         followers: [],
// //         following: [],
// //         posts: [],
// //       });
// //     }

// //     res.json({ success: true, user });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// export const getUserData = async (req, res) => {
//   try {
//     const { userId, sessionClaims } = req.auth();

//     let user = await User.findOne({ clerkId: userId });

//     if (!user) {
//       user = await User.create({
//         clerkId: userId,
//         email: sessionClaims?.email || "",
//         full_name: sessionClaims?.name || "New User",
//         username: "",
//         bio: "",
//         location: "",
//         profile_picture: "",
//         cover_photo: "",
//         followers: [],
//         following: [],
//         posts: [],
//       });
//     }

//     res.json({ success: true, user });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };




// /* ================================
//    UPDATE USER DATA
// ================================ */
// export const updateUserData = async (req, res) => {
//   try {
//     const { userId } = req.auth();
//     let { username, bio, location, full_name } = req.body;

//     let user = await User.findOne({ clerkId: userId });

//     // SAFETY CHECK
//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     /* ---------- USERNAME VALIDATION ---------- */
//     if (!username) username = user.username;

//     if (username && username !== user.username) {
//       const usernameTaken = await User.findOne({ username });
//       if (usernameTaken) {
//         return res.json({
//           success: false,
//           message: "Username already taken",
//         });
//       }
//     }

//     const updatedData = {
//       username,
//       bio,
//       location,
//       full_name,
//     };

//     const profile = req.files?.profile?.[0];
//     const cover = req.files?.cover?.[0];

//     /* ---------- PROFILE IMAGE ---------- */
//     if (profile) {
//       const uploadResponse = await imagekit.upload({
//         file: fs.readFileSync(profile.path),
//         fileName: profile.originalname,
//         folder: "/profile",
//       });

//       fs.unlinkSync(profile.path);

//       updatedData.profile_picture = imagekit.url({
//         path: uploadResponse.filePath,
//         transformation: [
//           { quality: "auto" },
//           { format: "webp" },
//           { width: "512" },
//         ],
//       });
//     }

//     /* ---------- COVER IMAGE ---------- */
//     if (cover) {
//       const uploadResponse = await imagekit.upload({
//         file: fs.readFileSync(cover.path),
//         fileName: cover.originalname,
//         folder: "/cover",
//       });

//       fs.unlinkSync(cover.path);

//       updatedData.cover_photo = imagekit.url({
//         path: uploadResponse.filePath,
//         transformation: [
//           { quality: "auto" },
//           { format: "webp" },
//           { width: "580" },
//         ],
//       });
//     }

//     const updatedUser = await User.findOneAndUpdate(
//       { clerkId: userId },
//       updatedData,
//       { new: true }
//     );

//     res.json({
//       success: true,
//       user: updatedUser,
//       message: "Profile updated successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// /* ================================
//    DISCOVER USERS
// ================================ */
// export const discoverUsers = async (req, res) => {
//   try {
//     const { userId } = req.auth();
//     const { input } = req.body;

//     const users = await User.find({
//       $or: [
//         { username: new RegExp(input, "i") },
//         { full_name: new RegExp(input, "i") },
//         { location: new RegExp(input, "i") },
//       ],
//     });

//     const filteredUsers = users.filter(
//       (u) => u.clerkId !== userId
//     );

//     res.json({ success: true, users: filteredUsers });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// /* ================================
//    FOLLOW USER
// ================================ */
// export const followUser = async (req, res) => {
//   try {
//     const { userId } = req.auth(); // Clerk ID
//     const { id } = req.body; // Target MongoDB _id

//     const user = await User.findOne({ clerkId: userId });
//     const toUser = await User.findById(id);

//     if (!user || !toUser) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     if (user.following.includes(id)) {
//       return res.json({
//         success: false,
//         message: "You are already following this user",
//       });
//     }

//     user.following.push(id);
//     toUser.followers.push(user._id);

//     await user.save();
//     await toUser.save();

//     res.json({ success: true, message: "User followed successfully" });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// /* ================================
//    UNFOLLOW USER
// ================================ */
// export const unFollowUser = async (req, res) => {
//   try {
//     const { userId } = req.auth();
//     const { id } = req.body;

//     const user = await User.findOne({ clerkId: userId });
//     const toUser = await User.findById(id);

//     if (!user || !toUser) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     user.following = user.following.filter(
//       (uid) => uid.toString() !== id
//     );

//     toUser.followers = toUser.followers.filter(
//       (uid) => uid.toString() !== user._id.toString()
//     );

//     await user.save();
//     await toUser.save();

//     res.json({ success: true, message: "User unfollowed successfully" });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };
