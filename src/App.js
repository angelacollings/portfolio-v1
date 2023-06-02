import logo from "./img/logo-green.jpg";

function App() {
  return (
    <div className="App">
      <img
        // resize the image to 100px
        style={{ width: "100px" }}
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default App;
