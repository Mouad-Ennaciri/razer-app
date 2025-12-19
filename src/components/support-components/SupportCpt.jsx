import React, { useRef } from 'react'
import bgSupport from '../../assets/images/razer-bg-support.webp';
import {RiSearchLine, RiUserLine} from "@remixicon/react";
import {
  RiShieldCheckLine,
  RiShoppingBag3Line,
  RiCustomerService2Line,
  RiCloudLine
} from "@remixicon/react";
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';
function SupportCpt() {
  return (
    <div className='w-full h-screen flex flex-col gap-y-7 justify-center items-center'>
      <BgSupport/>
      <SupportInput/>
      <SupportSupport/>
    </div>
  )
}
function BgSupport(){
  return <img src={bgSupport} className='absolute object-cover h-full w-full'/>
}
function SupportInput(){
  return <div className=' z-100 text-amber-50 flex h-[50px]'> 
    <input placeholder='HOW CAN WE SUPPORT YOU' className='text-amber-50 pl-5 rounded-l-2xl outline-none backdrop-blur-[2px] w-[600px] border-1 border-[#0e7291] placeholder-[#e9e9e9] rounded-l' />
    <RiSearchLine className='bg-[linear-gradient(to_right,#0e7291,violet)] h-full w-[60px] rounded-r-2xl p-3 relative  -left-[10px] '/>
  </div>
}
function SupportSupport(){
  return <div>
    <SingleSupport/>
  </div>
}
function SingleSupport(){
  
 useGSAP(()=>{
 const tl=gsap.timeline({    duration: 0.5,
    ease: 'power3.inOut',})
    tl.from('.hole',{
      width:0
    }).
     from('.hide',{
      y:-400
     }).to('.hole',{
    width:'0px'
  })
     .to(['#one', '#two', '#three', '#fore'], {
    left: i => ['0%', '0%', '0%', '0%'][i],
      // rotationY: 360,
  duration: 0.5,
  ease: "power2.inOut",
  transformOrigin: "center center",
  })
  }   
  ,[]) 
  return <div className='relative flex flex-col  justify-center items-center gap-y-7  w-full overflow-hidden'>
      <span  className='hole z-50 w-[250px] relative -top-2.5 bg-[rgba(0,0,0,1)] rounded-[50%] h-[30px]  cursor-pointer' >
        
      </span>
      <div className='flex relative gap-x-7  hide'>
      <HexagonCard id='one' className='absolute  left-[38.5%]' icon={<RiShieldCheckLine/>} title='Registration & Warranty' subtitle='We are here to support you'/>
      <HexagonCard id='two' className='absolute left-[13%]' icon={<RiShoppingBag3Line/>} title='Online Store' subtitle='We are here to support you'/>
      <HexagonCard id='three' className='absolute left-[-12.7%]' icon={<RiCustomerService2Line/>} title='RazerCare' subtitle='We are here to support you'/>
      <HexagonCard id='fore' className='absolute -left-[38.5%]' icon={<RiCloudLine/>} title='Online Services & Resources' subtitle='We are here to support you'/>
      </div>
  </div>
}
 function HexagonCard ({ onClick,icon, title, subtitle,className,id }){
   
  return (
    <div onClick={onClick} id={id} className={`relative group cursor-pointer ${className}`}>
      <div 
        className="bg-emerald-500  transition-all duration-300 group-hover:bg-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
        style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          padding: '2px',
        }}
      >
        <div 
          className="bg-[linear-gradient(90deg,rgba(5,10,48,1)_0%,rgba(74,9,121,1)_35%,rgba(11,135,87,1)_100%)] flex flex-col items-center justify-center p-8 h-64 w-64"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
        >

          <div className="text-emerald-500 mb-4 scale-155">
             {icon}
          </div>
          
          <h3 className="text-white font-bold text-sm tracking-widest text-center uppercase">
            {title}
          </h3>
          
          <button className="mt-4 px-4 py-1 border border-emerald-500/50 rounded-full text-[10px] text-emerald-400 uppercase tracking-tighter hover:bg-emerald-500 hover:text-black transition-colors">
            {subtitle}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SupportCpt
