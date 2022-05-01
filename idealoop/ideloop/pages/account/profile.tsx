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
          console.log(body)
          const userDetails = await fetcher("/api/getUser", {user: body})
          setUser(userDetails);
          
          
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
        <div className="userinformation">
        <h1>Your Information</h1>
        <h2>Hello {user['firstName']}</h2>
        <p>First Name: {user['firstName']}</p>
        <p>Last Name: {user['lastName']}</p>
        <p>User Role: {user['role']}</p>
        <p>User E-mail: {user['email']}</p>
        </div>
        </div>
        </>
    )
}