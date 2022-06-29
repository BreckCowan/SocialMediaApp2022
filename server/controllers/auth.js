import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  //   console.log("Register Endpoint => ", req.body);
  const { name, email, password, secret } = req.body;
  //validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be at least 6 characters long");
  if (!secret) return res.status(400).send("Answer is required");
  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is already taken");
  //hash password
  const hashedPassword = await hashPassword(password);

  const user = new User({ name, email, password: hashedPassword, secret });
  try {
    await user.save();
    // console.log('Registered User => ', user)
    return res.json({
      ok: true,
    });
  } catch (err) {
    // console.log("Register Failed => ", err);
    return res.status(400).send("Error, please try again");
  }
};

//code block creating errors
// export const login = async (req, res) => {
//   // console.log(req.body)
//   try {
//     const { email, password } = req.body;
//     //check if database has a user with that email
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).send("No user found");
//     //check password
//     const match = await comparePassword(password, user.password);
//     if (!match) return res.status(400).send("Incorrect password");
//     //create signed token
//     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });
//     user.password = undefined;
//     user.secret = undefined;
//     res.json({
//       user,
//       token,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send("Error. Try again.");
//   }
// };

//code solution from course instructor
export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }

    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d", // 20 * 60 = 20 sec
    });

    // return user and token to client, exclude password and secret
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};