import {Schema, model, Model, Error} from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

interface IUser {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true })

interface UserModel extends Model<IUser> {
  signup(email: string, password: string): Promise<IUser | null>;
}

userSchema.statics.signup = async function(email: string, password: string): Promise<IUser | null> {
  if(!email || !password) {
    throw new Error('All field must be filled')
  } 
  if(!validator.isEmail(email)) {
    throw new Error('Email is not valid')
  }
  if(!validator.isStrongPassword(password)) {
    throw new Error('Password not strong enough')
  }

  const exists = await this.findOne({email})

  if (exists) {
    throw new Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash})

  return user
}

const userModel = model<IUser, UserModel>('user', userSchema)

export default userModel