import { Request, Response } from 'express';
import User from '../model/userModel'

export const loginUser = async (req: Request, res: Response) => {
  res.json({message: 'Login User'})
}

export const signupUser = async (req: Request, res: Response) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    res.status(200).json({email, user})
  } catch(error: any) {
    res.status(400).json({message: error.message})
  }
}

