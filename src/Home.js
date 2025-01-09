import BlogsList from "./BlogsList";
import useFetch from "./fetch";
const Home = () => {
  const {Data : blogs,isPinding,error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
          {error && <div>{error}</div>}
            {isPinding && <div>Loding ...</div>}
            {blogs && <BlogsList blogs={blogs} title='All Blogs' />}

        </div>
     );
}
 
export default Home;