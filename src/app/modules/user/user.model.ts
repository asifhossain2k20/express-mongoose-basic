import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;
const userSchema = new Schema<IUser,UserModel,IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    fristName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emargencyContact: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
});

//static-->class-->this.  -->class
userSchema.static('getAdminUsers',async function getAdminUsers() {
  const admins=await this.find({role:"admin"})
});

userSchema.method('fullName', function fullName() {
  return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser,UserModel>("User", userSchema);

export default User;

//instance methods-->instance er methods
//class-->instance +methods-->instance methods
