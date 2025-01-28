import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import {Routes, Route } from "react-router-dom";
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200">
     <Navbar/>
     <HeroSection/>
     <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<CreatePage/>}/>
     </Routes>
     
  
    </div>
  );
};

export default App;

