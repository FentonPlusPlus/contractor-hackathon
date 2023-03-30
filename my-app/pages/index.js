import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/navbar';



export default function Home() {
  return (
    <>
      <Head>
        <title>Colin the Contractor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
       <h1 style={{marginLeft: '5rem', marginTop: '3rem'}}>Colin the Contractor</h1>
       <p style={{marginLeft: '5rem'}}>Can he contract it? Yes he can.</p>
      </main>
    </>
  )
}
