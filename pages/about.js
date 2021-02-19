
import Head from 'next/head'
import styles from '../styles/Home.module.css'
const About=() =>{
  return (
      <>
    <Head>
    <title>About</title>
  </Head>
    <div className={styles.container}>
    <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero a excepturi cum quaerat exercitationem adipisci eum iusto dolor quasi natus dolorem sed, non in, voluptatem vero repudiandae vitae tenetur.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis excepturi eius, dicta porro esse culpa, veritatis quam labore laboriosam vitae quisquam recusandae accusamus molestiae et optio laudantium eligendi tempore.</p>
    </div>
      </>
  )
}

export default About
