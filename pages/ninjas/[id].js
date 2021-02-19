import {useRouter} from 'next/router';
const Details = ({ninja}) => {
  const router = useRouter()
  const {id} = router.query

    return (
      <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>

      </div>
    );
  }
   
  export default Details;

  // export const getStaticPaths = async () =>{
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //   const data = await res.json();

  //   const paths = data.map(ninja =>{
  //     return {
  //       params :{ id : ninja.id.toString()}
  //     }
  //   })
  //   return {
  //     paths: paths,
  //     fallback:false
  //   }
  // }

  export const getServerSideProps = async (context) =>{
    const id = context.params.id;
    const res =  await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data = await res.json();

    return {
      props : {
        ninja: data
      }
    }
  }