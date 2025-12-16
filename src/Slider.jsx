import { useState } from "react";
import firsImg from "./assets/images/razer-img/cursor-razer.png";
import secondImg from "./assets/images/razer-img/pc-razer.png";
import thirdImg from "./assets/images/razer-img/razer-headphones-gray.png";
import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";
function Slider() {
  const [curr, setCurr] = useState(1);
  const products = [firsImg, secondImg, thirdImg];
  return (
    <div
      className="flex items-center justify-center backdrop-blur-3xl bg-[rgba(0,0,0,0.3)] relative -top-4 border border-white
    [mask-image:linear-gradient(to_bottom,white_0%,white_50%,transparent_100%)] rounded-[6px] text-[white]"
    >
      <SliderContainer>
        <SliderImages curr={curr} onSetCurr={setCurr} products={products} />
        <SliderText />
      </SliderContainer>
    </div>
  );
}

function SliderContainer({ children }) {
  return (
    <div className="flex justify-between items-center p-10">{children}</div>
  );
}
function SliderText() {
  return (
    <div className="text-3xl w-[500px]">
      +1600 products hurry and purchase now before it ends
    </div>
  );
}
function SliderImages({ curr, onSetCurr, products }) {
  function leftArrow() {
    curr === 0 ? onSetCurr(products.length - 1) : onSetCurr((c) => c - 1);
  }
  function rightArrow() {
    curr === products.length - 1 ? onSetCurr(0) : onSetCurr((c) => c + 1);
  }
  return (
    <div className="flex items-center">
        <RiArrowLeftSLine onClick={leftArrow}  className="cursor-pointer w-12 h-12 p-4 bg-[#323232] mr-5 rounded-md" />
      <div className="flex gap-x-5">
        {products.map((pr, i) => (
          <div key={i} className="pointer-events-none">
            <img
              className={`h-[70px]  ${
                curr === i ? "scale-[2.3]" : "scale-100"
              } transition-transform duration-700 pointer-events-none z-0`}
              src={pr}
            />
          </div>
        ))}
      </div>
        <RiArrowRightSLine onClick={rightArrow} className="cursor-pointer w-12 h-12 ml-4 mr-8 p-4 bg-[#323232] rounded-md" />
    </div>
  );
}
export default Slider;
