import { useState } from "react";

const Home = () => {

    const [name,setName] = useState("turki");
    const [age,setAge] = useState(24);
    const handleClick = () =>{
        setName("ali");
        setAge(26);

        }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;