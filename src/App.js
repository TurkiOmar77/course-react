import Navbar from './navbar';
import Home from './Home';

function App() {
  const title = 'welcome to new bolg :)';
  const likes = 50;
  const linkGoogle = "http//www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
