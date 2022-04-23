// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";

const SALT_OR_ROUNDS = 10;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST'){
    return res.status(405).json({message: 'Method not allowed'})
  }
  try {
    const {user} = req.body
    // const user: Prisma.UserCreateInput = JSON.parse(req.body);
      if(user.firstName == null || user.lastName == null || user.email == null || user.password == null){
          console.log("All fields are required")
          res.status(400).json({message: 'All fields are required'})
      }
      const email = await prisma.user.findFirst({
        where: {
            email: user.email
        }
    })
    if(email){
      return res.status(422).json({error:"user already exists with that email"})}

  user.password= bcrypt.hashSync(user.password, SALT_OR_ROUNDS);
  console.log(user)
    const savedUser = await prisma.user.create({
      data: user
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({message: 'Something went wrong'})
  }
  
}
