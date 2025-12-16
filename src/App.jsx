import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Features from "./pages/Features";
import Support from "./pages/Support";
import About from "./pages/About";
import ThreeDSignIn from "./components/ThreeDSignIn";

function App() {
   const [closed,setClosed]=useState(false);
  return (
    <div className="overflow-hidden">
      <Navbar onSetClosed={setClosed}/>
      <ThreeDSignIn className={`z-100`} closed={closed} onSetClosed={setClosed}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
