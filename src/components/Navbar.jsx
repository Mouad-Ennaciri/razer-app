import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { RiUserLine, RiShoppingBag4Line } from "@remixicon/react";
import { getCartCount } from "../utils/cart";

function Navbar({ onSetClosed }) {
  return (
    <div className="flex justify-between items-center h-[70px] bg-[#1b1b1b] text-[white] px-5">
      <div className="flex gap-2.5 items-center">
        <Logo className="h-[35px] text-[#15ec15]" />
        <span className="tracking-[3px]">RAZER</span>
      </div>

      <NavLinks />

      {/* REMOVED the Link from here because we want individual control over icons */}
      <UserAndCart onSetClosed={onSetClosed} />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="flex gap-x-20">
      <Link
        to="/"
        className="hover:text-[#15ec15] hover:scale-[1.2] duration-300"
      >
        Home
      </Link>
      <Link
        to="/products"
        className="hover:text-[#15ec15] hover:scale-[1.2] duration-300"
      >
        Products
      </Link>
      {/* <Link
        to="/features"
        className="hover:text-[#15ec15] hover:scale-[1.2] duration-300"
      >
        Features
      </Link> */}
      <Link
        to="/support"
        className="hover:text-[#15ec15] hover:scale-[1.2] duration-300"
      >
        Support
      </Link>
      <Link
        to="/about"
        className="hover:text-[#15ec15] hover:scale-[1.2] duration-300"
      >
        About
      </Link>
    </div>
  );
}

function UserAndCart({ onSetClosed }) {
  const [count, setCount] = useState(getCartCount());

  useEffect(() => {
    const updateCount = () => setCount(getCartCount());
    window.addEventListener("storage", updateCount);
    window.addEventListener("cart-updated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cart-updated", updateCount);
    };
  }, []);

  function openSignIn() {
    onSetClosed(true);
  }

  return (
    <div className="flex gap-5">
      {/* User Icon */}
      <RiUserLine
        onClick={openSignIn}
        className="bg-[#555555] cursor-pointer rounded-full w-10 h-10 p-2 hover:text-[#15ec15] transition duration-300"
      />

      {/* Cart Icon with Link and Badge */}
      <Link to="/cart" className="relative">
        <RiShoppingBag4Line className="bg-[#555555] cursor-pointer rounded-full w-10 h-10 p-2 transition duration-300 hover:text-[#15ec15]" />

        {count > 0 && (
          <span className="absolute flex items-center justify-center w-5 h-5 text-[10px] font-bold text-black rounded-full -top-1 -right-1 bg-lime-500 border-2 border-[#1b1b1b]">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Navbar;
