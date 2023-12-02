import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/FooterDiv/Footer";
import Navbar from "./Components/NavDiv/Navbar";
import PostJob from "./pages/postJob"; 
import JobDesc from "./pages/JobDesc";


function App() {
  return (
      <div className="w-[85%] m-auto bg-white ">
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
        <PostJob></PostJob>
        <JobDesc></JobDesc>
      </div>
  );
}

export default App;
