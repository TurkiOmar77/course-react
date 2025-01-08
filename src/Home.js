import { useState , useEffect } from "react";
import BlogsList from "./BlogsList";
const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'turki', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'ali', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'turki', id: 3 }
      ]);

      const [name,setName] = useState("turki")

      const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      }
      useEffect(()=>{
        console.log("useEffect !")
        console.log(name);
    },[name]);
    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            <button onClick={()=> setName("ali")}>change name </button>
            <p>{name}</p>

        </div>
     );
}
 
export default Home;