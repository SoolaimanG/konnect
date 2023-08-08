import mongoose from "mongoose";

interface UserAuthProps {
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  firstTimeLogin: boolean;
  image: string;
  verifyAccountToken: string;
}

const Schema = mongoose.Schema;

const requestPassword = new Schema({
  requestPassword: Boolean,
  expires: Number,
  lastRequest: Number,
  requestID: String,
});

//Users Authentication Modal
const UserAuth = new Schema<UserAuthProps>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      select: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    email: {
      type: String,
      require: true,
      select: true,
    },
    emailVerified: {
      type: Boolean,
      select: true,
    },
    firstTimeLogin: {
      type: Boolean,
      select: true,
    },
    image: {
      type: String,
      select: true,
    },
    verifyAccountToken: {
      type: String,
      select: true,
    },
  },
  {
    timestamps: true,
  }
);

//Creating new users
export const UserModal =
  mongoose.models?.users || mongoose.model("users", UserAuth); //Create instance for Our DB user
