import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>the dojo blog</h1>
            <div className="linkes">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;