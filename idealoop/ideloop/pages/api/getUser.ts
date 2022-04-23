import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const login = await prisma.user.findFirst({
    where: {
        email: req.body['email'],
    }  
})
return res.json(login)
}