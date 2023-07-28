import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialsBar from "./components/SocialsBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <SocialsBar />
    </div>
  );
}

export default App;
