import { Link } from "react-router-dom";
import Logo from "./Logo";
import { RiUserLine,RiShoppingBag4Line } from "@remixicon/react";
function Navbar({onSetClosed}) {
  return (
    <div className="flex justify-between items-center h-[70px]  bg-[#1b1b1b] text-[white] px-5">
      <div className="flex gap-2.5 items-center">
        <Logo className='h-[35px] text-[#15ec15]'/>
        <span className="tracking-[3px]">RAZER</span>
      </div>
      <NavLinks/>
      <UserAndCart onSetClosed={onSetClosed}/>
    </div>
  );
}
function NavLinks(){
  return <div className="flex gap-x-20">
     <Link to="/" className="hover:text-[#15ec15] hover:scale-[1.2] duration-300">Home</Link>
      <Link to="/products" className="hover:text-[#15ec15] hover:scale-[1.2] duration-300">Products</Link>
      <Link to="/features" className="hover:text-[#15ec15] hover:scale-[1.2] duration-300">Features</Link>
      <Link to="/support" className="hover:text-[#15ec15] hover:scale-[1.2] duration-300">Support</Link>
      <Link to="/about" className="hover:text-[#15ec15] hover:scale-[1.2] duration-300">About</Link>
  </div>
}
function UserAndCart({onSetClosed}){
  function openSignIn(){
    onSetClosed(true);
  }
  return <div className="flex gap-5">
    <RiUserLine onClick={openSignIn} className="bg-[#555555] cursor-pointer rounded-full w-10 h-10 p-2 hover:text-[#15ec15] transition duration-300 "/>
    <RiShoppingBag4Line className="bg-[#555555] cursor-pointer rounded-full w-10 h-10 p-2 transition duration-300 hover:text-[#15ec15]"/>
  </div>
}
export default Navbar;
