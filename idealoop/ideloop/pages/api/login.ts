import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from "next"
import * as bcrypt from "bcrypt";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST'){
      return res.status(405).json({message: 'Method not allowed'})
    }
    try {
      const {user} = req.body
        if(user.email == null || user.password == null){
            res.status(400).json({message: 'All fields are required'})
        }
        
        const login = await prisma.user.findFirst({
          where: {
              email: user.email,
          }  
      })
      if(!bcrypt.compareSync(user.password, login.password )){
       res.status(402).json({message: "The passwords do not match"});
      }
      
    if(login){
        res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            email: user.email,
            password: user.password,
          });
    }
    
        
      
    } catch (error) {
      console.log(error)
      res.status(400).json({message: 'Something went wrong'})
    }
    
  }