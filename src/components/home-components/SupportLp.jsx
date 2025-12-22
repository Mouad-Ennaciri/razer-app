import { useRef } from 'react';
import razVideo from '../../../public/video/trim.mp4'
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function SupportLp() {
 const bigText=useRef(null);

  useGSAP(()=>{
   const tl=gsap.timeline({
    scrollTrigger:{
      trigger:bigText.current,
      start: "top bottom"
    }
   });

   tl.from(bigText.current,{
       y: 20,
    opacity: 0,
    stagger: 0.05,
    duration: 0.2,
    ease: "power4.out"
   })
//////
   gsap.from('.hero-sub',{
    y:60,
    opacity:0,
      duration: 1,
      scrollTrigger:{
      trigger:'.hero-sub',
      start: "top bottom"
    }
   })

     gsap.from('.buy',{
       y: 50,
    opacity: 0,
    
    duration: 0.5,
    ease: "power1.inOut",
      scrollTrigger:{
      trigger:'.buy',
      start: "top bottom"
    }
   })
      gsap.from('.learn',{
       y: 50,
    opacity: 0,
    duration: 0.5,
    delay:0.2,
    ease: "power1.inOut",  
    scrollTrigger:{
      trigger:'.learn',
      start: "top bottom"
    }
   })
   
  },[])

  return (
   <section className="relative w-screen h-screen overflow-hidden">
  <video
    src={razVideo}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

    <h1 ref={bigText} className="hero-title opacity-[1] text-white text-5xl md:text-7xl font-extrabold tracking-wide">
      RAZER KRAKEN
    </h1>

    <p className="hero-sub text-gray-300 mt-4 max-w-xl text-lg">
      Immersive sound. Ultimate comfort. Built for competitive gaming.
    </p>

    <div className="hero-buttons mt-8 flex gap-6">
      <button className="buy px-8 py-3 cursor-pointer bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition">
        Buy Now
      </button>

      <button className="learn px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
        Learn More
      </button>
    </div>

  </div>

</section>

  )
}


export default SupportLp
