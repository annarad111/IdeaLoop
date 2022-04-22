import {Prisma } from '@prisma/client';
import Head from 'next/head';
import { Container } from '@mui/material';
import styles from '../styles/Home.module.css';
import prisma from '../../ideloop/lib/prisma';
import { fetcher } from '../utils/fetcher';
import { useState } from 'react';
import Slider from '../components/Slider';

export async function getServerSideProps(){
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany();
  return{
    props: { initialUsers: users },
  };
}

const options = [
  {key: "d", text: "DEVELOPER", value: "DEVELOPER"},
  {key: "u", text: "USER", value: "USER"},
  {key: "a", text: "ADMIN", value: "ADMIN"},
]

export default function Home({ initialUsers }) {
  const [users, setUsers] = useState<Prisma.UserUncheckedCreateInput[]>(initialUsers)
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState();

  const handleChange =(e, { value }) => setRole(value);

  const handleData =async () =>{
    const body: Prisma.UserCreateInput={
      firstName,
      lastName,
      role,
      email,
      avatar
    };
    await fetcher("/api/create", {user: body})
    await setUsers([...users, body]);
    setFirstname("");
    setLastname("");
    setAvatar("");
    setLastname("");
    setRole(null);
    setEmail("");
  }

  return (
    <>
      <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      </Head>

     <Slider></Slider>
    <Container style={{ margin: 20 }}>

        

    </Container>
    </>

  )
}
