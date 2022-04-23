import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from "next"
import * as bcrypt from "bcrypt";
import getConfig from 'next/config';
// const { serverRuntimeConfig } = getConfig();
// const jwt = require('jsonwebtoken');


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST'){
      return res.status(405).json({message: 'Method not allowed'})
    }
    try {
      const {user} = req.body
      console.log(user);
        if(user.email == null || user.password == null){
            console.log("All fields are required")
            // res.status(400).json({message: 'All fields are required'})
        }
        // if (!(user && bcrypt.compareSync(user.password, user.hash))) {
        //     throw 'Username or password is incorrect';
        // }
        
        const login = await prisma.user.findFirst({
          where: {
              email: user.email,
          }  
      })
      console.log(login);
      if(!bcrypt.compareSync(user.password, login.password )){
       res.status(402).json({message: "The passwords do not match"});
      }
      
    // const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' });
    if(login){
        res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            email: user.email,
            password: user.password,
            // token: token
          });
    }
        
      
    } catch (error) {
      console.log("nu e bine")
      console.log(error)
      res.status(400).json({message: 'Something went wrong'})
    }
    
  }