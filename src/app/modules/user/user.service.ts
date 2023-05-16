import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
  //creating a new user
  const user=new User(payload) //User-->class user->instance
  await user.save(); //built in instance methods || Custom instance methods
  //custom user method
  console.log(user.fullName());
  return user;
};

//all data get from DB
export const getUsersFromDB=async ():Promise<IUser[]>=>{
  const users=await User.find()
  return users;
}

//one data get from DB
export const getUserByIdFromDb=async(payload:string):Promise<IUser|null>=>{
  const user=await User.findOne({id:payload},{name:1,contactNo:1})//just filtering name and contactNo
  return user;
}


export const getAdminUsersFromDB=async()=>{
 //static ->attach->method->directly call using class
 const admins=await User.getAdminUsers()
 return admins;
}


