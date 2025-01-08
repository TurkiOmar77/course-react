import { useState , useEffect } from "react";
import BlogsList from "./BlogsList";
const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPinding ,setIsPinding] = useState(true);
    const [error,setError] = useState(null);

      
      useEffect(()=>{
        setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
          console.log(res)
          if(!res.ok){
            throw Error('could not fetch the data');
          }
          return res.json()
        })
        .then(data => {
          setBlogs(data);
          setIsPinding(false);
          setError(null);
        })
        .catch(err =>{
          setIsPinding(false);
          setError(err.message);
        })
        },1000)
    },[]);
    return ( 
        <div className="home">
          {error && <div>{error}</div>}
            {isPinding && <div>Loding ...</div>}
            {blogs && <BlogsList blogs={blogs} title='All Blogs' />}

        </div>
     );
}
 
export default Home;