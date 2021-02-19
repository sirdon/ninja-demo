import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div >
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolor nulla officia quam vel libero aliquam pariatur perspiciatis, et rem facere laborum alias eaque nihil ullam dignissimos exercitationem cupiditate nam.</p>
     <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolor nulla officia quam vel libero aliquam pariatur perspiciatis, et rem facere laborum alias eaque nihil ullam dignissimos exercitationem cupiditate nam.</p>
     <Link href="/ninjas/">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
  
    </div>
    </>
  )
}
