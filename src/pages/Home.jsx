import { Features } from "tailwindcss";
import HeroPart1 from "../components/home-components/Hero-part1";
import Products from "./Products";
import SupportLp from "../components/home-components/SupportLp";
import SupportHero from "../components/support-components/SupportHero";
function Home(){
  return <div className=" bg-[#1b1b1b]">
    <HeroPart1/>
    <Products/>
    <SupportLp/>
    <SupportHero/>
  </div>
}
export default Home;