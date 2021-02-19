import Link from 'next/link';
import ninjaStyles from '../../styles/Ninjas.module.css';
const Ninjas = ({ninjas}) => {
    return (
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja=>(
            <Link key={ninja.id} href={'/ninjas/'+ninja.id}>
                <a className={ninjaStyles.single}>
                    <h3>{ninja.name}</h3>
                </a>
            </Link>
        ))}
      </div>
    );
  }
   
  export default Ninjas;

  export const getStaticProps = async ()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json()
      return {
          props:{
              ninjas:data
          }
      }
  }