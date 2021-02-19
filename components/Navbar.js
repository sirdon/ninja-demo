
import Link from 'next/link'
import Image from 'next/image'
const Navbar=()=> {
  return (
    <nav>
        <div className="logo">
        <Image src="/ninja.jpg" width={128} height={77}></Image>
        <h1>Ninja List</h1>
        </div>
       <Link href="/">
        <a> Home </a>
        </Link>
       <Link href="/about"> 
       <a> About </a>
       </Link>
       <Link href="/ninjas"> 
       <a> NinjaList </a>
       </Link>
    </nav>
  )
}

export default Navbar
