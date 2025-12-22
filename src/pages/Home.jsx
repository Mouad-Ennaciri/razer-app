import { Features } from "tailwindcss";
import HeroPart1 from "../components/home-components/Hero-part1";
import Products from "./Products";
import SupportLp from "../components/home-components/SupportLp";
function Home(){
  return <div className=" bg-[#1b1b1b]">
    <HeroPart1/>
    <Products/>
    <SupportLp/>
  </div>
}
export default Home;