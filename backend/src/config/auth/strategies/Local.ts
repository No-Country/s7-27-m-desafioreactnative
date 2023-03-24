// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";
// import User from "../../db/models/user";

// passport.use(
//   new LocalStrategy(async function (username, password, done) {
//     User.findOne({ username }, function (err: any, user: any) {
//       if (err) {
//         console.log("Error Passport Local Err: ", err);
//         return done(err);
//       }
//       if (!user) {
//         console.log("Error Passport Local user: ", user);
//         return done(null, false);
//       }
//       if (!user.verifyPassword(password)) {
//         console.log(
//           "Error Passport Local password: ",
//           user.verifyPassword(password)
//         );
//         return done(null, false);
//       }
//       return done(null, user);
//     });
//   })
// );
