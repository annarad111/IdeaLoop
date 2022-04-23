import Avatar from "@mui/material/Avatar";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavbarForPages from "../../components/NavbarForPages";
import { fetcher } from "../../utils/fetcher";

export default function Profile(){
    const[user, setUser] = useState([])

    const fecthUser = async () => {
        const body: Prisma.UserWhereInput={
            email: window.localStorage.getItem('user'),
        };
        try {
          const userDetails = await fetcher("/api/getUser", {user: body})
          setUser(userDetails);
          console.log(user)
          
        } catch (err) {
          console.log(err);
        }
      }
      useEffect(() => {
        // Update the document title using the browser API
          fecthUser();
      },[]);

    console.log(user['id'])
    return(
        <>
        <NavbarForPages/>
        <div className="userdetails">
        <div>
        <Image width='500px' height='400px' src="/images/image_placeholder.png" />
        </div>
        <div>
        <h1>Hello {window.localStorage.getItem('user')}</h1>
        <p>{user['firstName']}</p>
        <p>{user['lastName']}</p>
        <p>{user['role']}</p>
        <p>{user['email']}</p>
        </div>
        </div>
        </>
    )
}