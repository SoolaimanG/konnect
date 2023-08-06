import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Users Authentication Modal
const UserAuth = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export const UserModal = mongoose.model("users", UserAuth); //Calling Our DB user

//Using this micro function for checks
export const findUserByEmail = async (email: string) => {
  const user = await UserModal.findOne({ email: email });
  return user;
};

export const findUserByUsername = async (username: string) => {
  const user = await UserModal.findOne({ username: username });
  return user;
};
