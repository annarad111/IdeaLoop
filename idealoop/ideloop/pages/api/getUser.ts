import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const login = await prisma.user.findFirst({
    where: {
        email: req.body.user.email,
    }  
})
console.log(req.body.user.email)
return res.json(login)
}