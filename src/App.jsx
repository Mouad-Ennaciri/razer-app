import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Features from "./pages/Features";
import Support from "./pages/Support";
import About from "./pages/About";
import ThreeDSignIn from "./components/ThreeDSignIn";
import FullProducts from "./pages/FullProducts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import ToastHost from "./components/ToastHost";
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="overflow-hidden">
      <ScrollToTop/>
      <ToastHost/>
      <Navbar onSetClosed={setClosed}/>
      <ThreeDSignIn className={`z-100`} closed={closed} onSetClosed={setClosed}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Featured */}
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        {/* Full list */}
        <Route path="/all-products" element={<FullProducts />} />
        {/* Details */}
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Cart / Checkout */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
     
    </div>
  );
}

export default App;
