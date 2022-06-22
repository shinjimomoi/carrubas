import './App.css';
import Banner from "./components/banner";
import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Banner />
    </div>
  );
}

export default App;
