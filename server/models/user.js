import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    min: 6,
    max: 64,
  },
  secret: {
    type: String,
    required: true,
  },
  about: {},
  photo: String, 
  following: [{type: Schema.ObjectID, ref: 'User'}],
  followers: [{type: Schema.ObjectID, ref: 'User'}],
}, 
{timestamps: true}
);

export default mongoose.model('User', userSchema);
