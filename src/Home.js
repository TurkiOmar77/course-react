import { useState , useEffect } from "react";
import BlogsList from "./BlogsList";
const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'turki', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'ali', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'turki', id: 3 }
      ]);

      const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      }
      useEffect(()=>{
        console.log("useEffect !")
    });
    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            <BlogsList blogs={blogs.filter((blog)=>blog.author === 'turki')} title='turki Blogs' handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;