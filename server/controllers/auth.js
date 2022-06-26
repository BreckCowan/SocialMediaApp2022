import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";

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
