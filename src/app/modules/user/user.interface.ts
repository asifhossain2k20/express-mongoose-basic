import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "Student";
  password: string;
  name: {
    fristName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth: string;
  email: string;
  gender: "male" | "Female";
  contactNo: string;
  emargencyContact: string;
  presentAddress: string;
  parmanentAddress: string;
}
//methods interface
export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

