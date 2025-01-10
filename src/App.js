import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogDetails';
function App() {
  const title = 'welcome to new bolg :)';
  const likes = 50;
  const linkGoogle = "http//www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
