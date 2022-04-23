import {Prisma } from '@prisma/client';
import Head from 'next/head';
import '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';


export default function Home() {

  return (
    <div>
      <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      </Head>
      
    <Navbar />
    <Slider />
    </div>


  )
}
