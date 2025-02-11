import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import {Routes, Route } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import SocialMediaSection from "./Components/SocialMediaSection";
import BlogSection from "./Components/BlogSection";
import Testimonials from "./Components/Testimonials";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-200">
     <Navbar/>
     <HeroSection/>
     <BlogSection/>
     <Testimonials/>
     <Routes>

      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/blog" element={<BlogSection/>}/> */}
      <Route path="/create" element={<CreatePage/>}/>
      <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
      

     </Routes>
     <SocialMediaSection/>
     <Footer/>
  
    </div>
  );
};

export default App;

