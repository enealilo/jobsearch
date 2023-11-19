import "./App.css";
import Footer from "./Components/FooterDiv/Footer";
import Jobs from "./Components/JobsDiv/Jobs";
import Navbar from "./Components/NavDiv/Navbar";
import Search from "./Components/SearchDiv/Search";
import Values from "./Components/Values/Values";

function App() {
  return (
      <div className="w-[85%] m-auto bg-white ">
        <Navbar></Navbar>
        <Search></Search>
        <Jobs></Jobs>
        <Values></Values>
        <Footer></Footer>
      </div>
  );
}

export default App;
